---
title: OpenAPI gap analysis
description: What would be needed to produce and maintain an OpenAPI specification for Outpay's public REST API.
---

# OpenAPI gap analysis

**No OpenAPI or Swagger specification exists in this repository.** A
targeted search for `openapi.json`, `openapi.yaml`, `swagger.json`, and
`swagger.yaml` (excluding `node_modules`, `.next`, and `.git`) returned no
results. This document identifies what a first OpenAPI specification for
Outpay would need to cover, derived from the route-by-route audit in
[`docs/OUTPAY_DOCUMENTATION.md`](./OUTPAY_DOCUMENTATION.md#endpoint-reference).

This is a **gap analysis**, not a fabricated specification — per the
documentation brief, no `openapi.json`/`.yaml` file is created by this pass.

## Scope: which routes belong in a public OpenAPI spec

Only the versioned, API-key-authenticated public surface is a genuine
external contract candidate today:

| Route | Include in v1 OpenAPI spec? |
|---|---|
| `POST /api/v1/checkouts` | Yes |
| `GET /api/v1/checkouts/{id}` | Yes |
| `GET /api/v1/payments` | Yes |

The unauthenticated hosted-checkout API (`/api/public/*`) is arguably a
second, narrower public contract (it is called directly by third-party
embeds/integrations that build a custom checkout UI against it), but it is
currently undocumented as a stable contract anywhere in the product and
should be scoped in deliberately, not accidentally, if included.

Every other route group — dashboard (`/api/checkouts`, `/api/payments`,
`/api/settings/*`, `/api/developers/*`, `/api/dashboard/*`,
`/api/onboarding`), admin (`/api/admin/*`), and internal/provider
(`/api/internal/*`) — is **not** a stable external contract and should be
explicitly excluded from any published OpenAPI spec, since these routes
change to serve the first-party dashboard, not third-party integrators.

## Request schemas needed

For the three in-scope routes, the request schemas already exist in code as
Zod schemas (`src/lib/validation/routes.ts::publicCreateCheckoutBodySchema`,
`src/lib/validation/routes.ts::publicPaymentsQuerySchema`,
`src/lib/validation/routes.ts::idParamsSchema`) and would need to be
translated to OpenAPI 3.x `schema` objects (JSON Schema-compatible). Notable
translation challenges:

- `publicCreateCheckoutBodySchema` uses a `.transform()` to normalize
  `cancelUrl`/`customerEmail` from `""` to `null` — OpenAPI schemas cannot
  express this transform; document the accepted input shape (string, empty
  string, or `null`) and the effective output shape separately, or drop the
  empty-string acceptance from the public contract before publishing.
- The `amount` field's regex constraint (`^\d+(\.\d{1,2})?$`) translates
  cleanly to an OpenAPI `pattern`.
- `Idempotency-Key` is a header parameter, not part of the body — needs to
  be modeled as a `parameters` entry with its own format constraint
  (`^[A-Za-z0-9:_-]+$`, 1-255 characters).

## Response schemas needed

The exact success-response shapes are documented with field tables in
[JSON object reference](./OUTPAY_DOCUMENTATION.md#json-object-reference) and
[Endpoint reference](./OUTPAY_DOCUMENTATION.md#endpoint-reference) — these
would translate directly to OpenAPI `components/schemas` entries (`Checkout`,
`Payment`, `CheckoutList` wrapper, etc.). One notable authoring decision:
the public API's `status` field uses a different vocabulary
(`pending_payment`/`payment_detected`/`paid`/`cancelled`/`expired`) than the
internal database enum and the hosted-checkout API's vocabulary
(`waiting`/`detected`/`paid`/`expired`) — the OpenAPI spec must pick and
document the public API's own vocabulary as an `enum` constraint, and should
not silently reuse the internal or hosted-checkout vocabularies.

## Authentication schemes

Needed: an OpenAPI `securityScheme` of type `http`, `scheme: bearer`, to
represent the `Authorization: Bearer <API_KEY>` requirement. The key-format
constraint (`ck_<test|live>_<hex>_<hex>`, with legacy `outpay_<test|live>_<hex>`
support) is not expressible in a `securityScheme` and would need to be
documented in prose alongside it. Scope-based authorization
(`checkouts:create`, `checkouts:read`, `payments:read`) has no first-class
OpenAPI representation for bearer-token schemes (OpenAPI's `scopes` concept
is designed for OAuth2) — document required scopes per operation in each
operation's `description` instead.

## Error schemas

The public API's error envelope
(`{"error": {"code", "message", "details", "request_id"}}`, documented in
[Error handling](./OUTPAY_DOCUMENTATION.md#error-handling)) should become a
shared `components/schemas/Error` object, referenced from every operation's
`4xx`/`5xx` responses. The full error-code catalogue in that section should
be enumerated per operation (not just as a generic `enum` on `code`, since
different operations return different subsets of codes).

## Webhook schemas

OpenAPI 3.1 supports documenting webhooks (the `webhooks` top-level key).
The single implemented merchant-webhook event
(`checkout.paid`, documented in
[Webhooks](./OUTPAY_DOCUMENTATION.md#webhooks)) could be modeled this way
once the spec targets OpenAPI 3.1. Note for authors: do not document the
seven additional event types from `ARCHITECTURE.md` in the webhooks section
of an OpenAPI spec — only `checkout.paid` is real today, and an OpenAPI spec
listing unimplemented events would actively mislead integrators (this is
exactly the failure mode this documentation project was asked to avoid).

## Missing types

- No shared "Money"/decimal-amount type is used consistently across schemas
  today beyond "string matching a decimal pattern" — worth formalizing as a
  reusable OpenAPI schema (`components/schemas/DecimalAmount`) with the
  2-decimal-place constraint documented.
- No shared "Timestamp" type beyond ISO 8601 strings — straightforward to
  formalize as `type: string, format: date-time`.
- No `Idempotency-Key` response-echo behavior is documented anywhere (the
  API does not currently return the idempotency key back to the caller in
  the response body) — worth deciding whether to add this before
  publishing, since Stripe-style APIs typically do.

## Versioning gaps

There is currently no mechanism to represent "this spec describes v1, a
future v2 exists at a different base path" beyond the literal `/api/v1/`
path prefix already in the routes — OpenAPI's `servers` and path-prefix
conventions handle this adequately once a v2 exists, but there is nothing to
design differently today. The bigger gap is that the **dashboard and admin
APIs are entirely unversioned**, so if either is ever opened up as a public
contract, a versioning decision would need to be made from scratch at that
time.

## Idempotency gaps

An OpenAPI spec for `POST /api/v1/checkouts` should document the
`Idempotency-Key` header's full replay semantics (see
[Idempotency and retries](./OUTPAY_DOCUMENTATION.md#idempotency-and-retries)),
including the `409 EXPIRED_IDEMPOTENCY_KEY` and `409
IDEMPOTENCY_KEY_REUSED` responses as first-class documented error cases,
not just generic `409` entries — these are behaviorally distinct and
integrators need to handle them differently (retry with a new key vs.
investigate a body mismatch).

## Recommended next steps

1. Decide the scope: `/api/v1/*` only, or also `/api/public/*` as a
   second, explicitly-versioned-or-not surface.
2. Translate the three in-scope routes' Zod schemas into OpenAPI 3.1
   `components/schemas`, resolving the `.transform()` and `enum`-vocabulary
   issues noted above.
3. Model the bearer-token auth scheme and document scopes in operation
   descriptions (not as OAuth2 `scopes`, which do not fit this design).
4. Build the shared `Error` schema from the documented error catalogue.
5. Add the `checkout.paid` webhook under OpenAPI 3.1's `webhooks` key, with
   an explicit note that additional event types are planned but not yet
   implemented.
6. Once published, connect the spec to Fumadocs' OpenAPI page generator
   (see [`docs/FUMADOCS_STRUCTURE.md`](./FUMADOCS_STRUCTURE.md)) under
   `content/docs/api-reference/`.
7. Add a CI check that fails if the spec drifts from the actual Zod
   schemas/route behavior, so this gap analysis does not need to be redone
   from scratch on every future audit.
