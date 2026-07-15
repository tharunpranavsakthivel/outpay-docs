# Outpay documentation audit

**Scope:** `outpay-docs` portal plus the sibling Outpay application checkout
available at `/Users/tp/Desktop/Adelecte/outpay`.

**Audit date:** 2026-07-14  
**Documentation version:** v0.1 Beta

## Files and surfaces reviewed

- `AGENTS.md`, `CLAUDE.md`, `README.md`, `package.json`, `next.config.ts`, and `tsconfig.json` in this repository.
- `docs/FUMADOCS_STRUCTURE.md`, `docs/OUTPAY_DOCUMENTATION.md`, `docs/OPENAPI_GAP_ANALYSIS.md`, and all three source changelog files.
- `design-system/readme.md`, `design-system/styles.css`, semantic/color/theme/typography tokens, and Outpay UI-kit components.
- Sibling application route handlers under `src/app/api/**`, including `/api/v1/**`, hosted checkout, dashboard, developer, settings, admin, and provider webhook routes.
- `src/lib/validation/routes.ts`, `src/lib/auth/api-key.ts`, `src/lib/api/public.ts`, payment status/matching modules, webhook signing/secrets, provider integration, and workers.
- Database migrations `0000` through `0014`, `.env.example`, `README.md`, deployment files, and relevant tests in the sibling application.
- Official Fumadocs documentation for Next.js MDX setup, page-tree/meta conventions, RootProvider, DocsLayout, DocsPage, components, themes, and Orama search.

## Verified and documented as available

- Fumadocs MDX content source under `content/docs`, loader-backed navigation, generated route pages, breadcrumbs, table of contents, previous/next navigation, search, and light/dark theme support.
- Merchant onboarding with signed payout-wallet ownership proof.
- Database-backed merchant dashboard surfaces for checkouts, payments, settings, developer API keys, webhook configuration, and delivery history.
- Public API routes: `POST /api/v1/checkouts`, `GET /api/v1/checkouts/{id}`, and `GET /api/v1/payments`.
- Bearer API-key authentication with environment-aware `ck_<env>_<prefix>_<secret>` parsing, scope checks, revocation, hashing, and timing-safe comparison.
- Checkout creation validation for positive decimal amounts, `base`, `USDC`, absolute success URL, optional cancel URL/customer email, and metadata.
- Checkout creation idempotency records, request hashing, replay, reuse conflicts, and 24-hour expiry behavior.
- Hosted checkout polling, countdown, server-enforced expiry, Base/USDC payment instructions, QR/deep-link display, and merchant wallet recipient.
- Base mainnet native USDC seed (`8453`, six decimals, the contract listed in the platform docs).
- Alchemy webhook intake, RPC reconciliation, provider failover configuration, payment matching, and confirmation transitions.
- One merchant webhook event: flat `checkout.paid` payload, HMAC-SHA256 signing, `X-Outpay-*` headers, retries, delivery records, and dashboard retry support.

## Documented as beta or experimental

- Payment detection and confirmation are **Experimental/Beta** because the application README says the production-readiness gap is not closed.
- Merchant webhook support is **Partial/Beta** because only `checkout.paid` is implemented.
- Status and payload vocabularies are **Beta** because public, hosted, and internal values are not fully unified.
- Usage-metering/billing accounting is **Partial**; invoicing and collection are not claimed.
- Live/test API-key environments are available in the key model, but a separate sandbox blockchain is not claimed.

## Documented as planned, unverified, or not implemented

- Official JavaScript/Python/other SDKs.
- Published OpenAPI/Swagger specification or generated API-reference pages.
- Additional merchant webhook events from the architecture plan.
- Refund endpoint, automatic refunds, subscriptions, fiat settlement, custody, multi-chain/multi-token support, and a payment router contract.
- Automated reorg handling and merchant-facing underpayment/overpayment remediation.
- A turnkey public-tunnel provider webhook testing workflow.
- Complete self-service team invitation flow.

## Missing API details and OpenAPI gaps

- The repository’s OpenAPI analysis identifies no complete spec and recommends translating the Zod schemas rather than fabricating one.
- Public response projections are not centralized into a published schema package.
- Public, hosted, internal, dashboard, and admin status vocabularies differ.
- The public API and dashboard helpers use different error envelopes.
- Pagination and idempotency response-echo behavior need a deliberate contract decision before OpenAPI publication.
- The exact confirmation threshold and all runtime rate limits should be made explicit in a future public contract.

## Conflicting information resolved

| Conflict | Resolution |
| --- | --- |
| Architecture describes eight merchant events; worker emits one. | Document only `checkout.paid`; label the others planned. |
| Architecture proposes richer lifecycle states; code enums are narrower and split by surface. | Document actual public/hosted/internal boundaries and warn that statuses are beta. |
| Root package records `0.1.0`; requested release channel says v0.1 Beta. | Use “v0.1 Beta” and state that the `-beta` label is a documentation/release-channel label, not a verified git tag. |
| Historical schema docs and migration history differ around billing/contact tables. | Treat newest migration chain and application queries as current; retain the gap as an operator concern. |
| Placeholder `OUTPAY_*_KEY` values appear in `.env.example`. | Explicitly state that they are reserved and not usable integration credentials. |

## Unsupported claims removed or avoided

- No invented API hostname is presented as canonical.
- No `settlement_asset`, `network`, nested webhook envelope, public key flow, SDK, refund, testnet, payment method, or numeric rate limit is presented as implemented unless verified.
- No claim of production readiness, automatic reorg recovery, or database restore readiness is made.
- No screenshots are fabricated; merchant UI pages use a labelled suggested-screenshot placeholder where useful.

## Pages created

The new portal includes:

- Root, getting started, developer, API reference, webhook, merchant, platform, operations, guide, resource, and changelog sections.
- 40+ MDX pages with section `meta.json` files.
- Direct cURL, JavaScript, TypeScript, Node.js, Next.js, React, and webhook-verification examples.
- Fumadocs source, route, layout, MDX component, search route, metadata, and theme integration.

## Existing pages retained

The original `docs/*.md` files remain as audit/source material. The new MDX portal is the publishable documentation surface; the original long-form report remains useful for deeper repository evidence and future reconciliation.

## Remaining documentation gaps

1. Publish a reviewed OpenAPI 3.1 document generated from the actual Zod schemas and route responses.
2. Add contract tests that compare API responses and webhook payloads to the docs build.
3. Document the exact deployed base URL, confirmation policy, retry schedule, rate-limit headers, and versioned status vocabulary.
4. Add approved screenshots from the live dashboard and alt text after the UI is finalized.
5. Close the payment-verification, reorg, mismatch-remediation, and backup/restore production-readiness decisions.
6. Add a changelog automation step that moves verified entries from Unreleased into a tagged release.

## Recommended next improvements

- Make the documentation build fail on broken internal links and stale endpoint examples.
- Add an API-contract fixture suite for `POST /api/v1/checkouts`, `GET /api/v1/checkouts/{id}`, `GET /api/v1/payments`, and `checkout.paid`.
- Centralize public DTOs, error codes, and status enums so documentation and runtime share a source of truth.
- Add explicit docs for support SLAs and incident escalation once an operator policy exists.
