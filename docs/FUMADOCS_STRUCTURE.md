# Fumadocs migration plan

This document proposes how `docs/OUTPAY_DOCUMENTATION.md` should later be
split into individual Fumadocs pages under `content/docs/`. It does not move
any existing documentation — this repository does not yet have a
`content/docs/` tree or a configured Fumadocs instance, so this is a plan for
future work, not a completed migration.

## Proposed page tree

```text
content/docs/
├── index.mdx
├── meta.json
├── getting-started/
│   ├── meta.json
│   ├── overview.mdx              <- Introduction
│   ├── quickstart.mdx            <- Getting started
│   ├── key-concepts.mdx          <- Key concepts
│   └── authentication.mdx        <- Authentication
├── platform/
│   ├── meta.json
│   ├── architecture.mdx          <- Platform architecture
│   ├── environments.mdx          <- Environments and base URLs
│   └── conventions.mdx           <- API conventions
├── payments/
│   ├── meta.json
│   ├── checkouts.mdx             <- Checkout creation/read workflows
│   ├── checkout-page.mdx         <- Hosted checkout
│   ├── lifecycle.mdx             <- Payment lifecycle
│   ├── blockchain.mdx            <- Blockchain integration
│   └── workflows.mdx             <- Feature-call workflows
├── api-reference/
│   ├── meta.json
│   ├── conventions.mdx           <- API conventions (cross-linked)
│   ├── objects.mdx               <- JSON object reference
│   ├── errors.mdx                <- Error handling
│   ├── idempotency.mdx           <- Idempotency and retries
│   └── endpoints/
│       ├── meta.json
│       ├── checkouts.mdx
│       ├── payments.mdx
│       ├── public.mdx
│       ├── developers.mdx
│       ├── settings.mdx
│       └── admin.mdx
├── webhooks/
│   ├── meta.json
│   ├── overview.mdx              <- Webhooks (provider + merchant split)
│   ├── events.mdx                <- Supported event types
│   └── verification.mdx          <- Signature verification examples
├── data-model/
│   ├── meta.json
│   └── database.mdx              <- Database model, ERD, table catalog
├── guides/
│   ├── meta.json
│   ├── fulfil-orders.mdx         <- Fulfil an order (from workflows)
│   ├── test-payments.mdx         <- Local development + webhook testing gap
│   └── retry-safely.mdx          <- Retry a failed request
├── operations/
│   ├── meta.json
│   ├── environment-variables.mdx
│   ├── deployment.mdx
│   ├── security.mdx
│   └── troubleshooting.mdx       <- Deployment troubleshooting table
├── dashboard/
│   ├── meta.json
│   └── features.mdx              <- Dashboard features (mock-vs-live audit)
├── sdk/
│   ├── meta.json
│   └── roadmap.mdx               <- SDK support
├── status/
│   ├── meta.json
│   ├── implementation-matrix.mdx
│   ├── known-limitations.mdx
│   ├── documentation-gaps.mdx
│   └── next-steps.mdx
└── changelog/
    ├── meta.json
    ├── index.mdx
    ├── unreleased.mdx
    └── v0.1-beta.mdx
```

## Source mapping

| `docs/OUTPAY_DOCUMENTATION.md` section | Target Fumadocs page(s) |
|---|---|
| Introduction | `getting-started/overview.mdx` |
| Version information | `getting-started/overview.mdx` (a subsection) or its own `getting-started/versioning.mdx` if it grows |
| Key concepts | `getting-started/key-concepts.mdx` |
| Platform architecture | `platform/architecture.mdx` |
| Getting started | `getting-started/quickstart.mdx` |
| Authentication | `getting-started/authentication.mdx` |
| Environments and base URLs | `platform/environments.mdx` |
| API conventions | `platform/conventions.mdx` (cross-linked from `api-reference/conventions.mdx`) |
| JSON object reference | `api-reference/objects.mdx` |
| Endpoint reference | `api-reference/endpoints/*.mdx`, split by the groupings already used in the source document (v1 public API, hosted-checkout API, provider webhook intake, dashboard-authenticated API, admin API, operational routes) |
| Feature-call workflows | `payments/workflows.mdx`, with the fulfilment and retry examples split into `guides/fulfil-orders.mdx` and `guides/retry-safely.mdx` |
| Payment lifecycle | `payments/lifecycle.mdx` |
| Hosted checkout | `payments/checkout-page.mdx` |
| Blockchain integration | `payments/blockchain.mdx` |
| Webhooks | `webhooks/overview.mdx`, `webhooks/events.mdx`, `webhooks/verification.mdx` |
| Error handling | `api-reference/errors.mdx` |
| Idempotency and retries | `api-reference/idempotency.mdx` |
| Database model | `data-model/database.mdx` |
| Dashboard features | `dashboard/features.mdx` |
| Local development | `guides/test-payments.mdx` (setup + testing subset) plus a general local-dev guide if this section grows |
| Environment variables | `operations/environment-variables.mdx` |
| Deployment | `operations/deployment.mdx`, with the troubleshooting table split into `operations/troubleshooting.mdx` |
| Security | `operations/security.mdx` |
| SDK support | `sdk/roadmap.mdx` |
| Implementation-status matrix | `status/implementation-matrix.mdx` |
| Known limitations | `status/known-limitations.mdx` |
| Documentation gaps | `status/documentation-gaps.mdx` |
| Recommended next engineering steps | `status/next-steps.mdx` |
| `docs/changelog/*.md` | `changelog/*.mdx` (near-direct copy; see below) |
| `docs/OPENAPI_GAP_ANALYSIS.md` | Keep as a repository-root planning document, or fold into `api-reference/` once an OpenAPI spec exists and Fumadocs' OpenAPI page generator is wired up |

## Example `meta.json` files

`content/docs/meta.json` (root):

```json
{
  "title": "Outpay Documentation",
  "pages": [
    "index",
    "getting-started",
    "platform",
    "payments",
    "api-reference",
    "webhooks",
    "data-model",
    "guides",
    "operations",
    "dashboard",
    "sdk",
    "status",
    "changelog"
  ]
}
```

`content/docs/getting-started/meta.json`:

```json
{
  "title": "Getting started",
  "pages": ["overview", "quickstart", "key-concepts", "authentication"],
  "defaultOpen": true
}
```

`content/docs/payments/meta.json`:

```json
{
  "title": "Payments",
  "pages": ["checkout-page", "lifecycle", "blockchain", "workflows"],
  "defaultOpen": true
}
```

`content/docs/api-reference/meta.json`:

```json
{
  "title": "API reference",
  "pages": ["conventions", "objects", "errors", "idempotency", "endpoints"],
  "defaultOpen": false
}
```

`content/docs/webhooks/meta.json`:

```json
{
  "title": "Webhooks",
  "pages": ["overview", "events", "verification"],
  "defaultOpen": false
}
```

`content/docs/changelog/meta.json`:

```json
{
  "title": "Changelog",
  "pages": ["index", "unreleased", "v0.1-beta"],
  "defaultOpen": false
}
```

Order changelog version pages **newest to oldest**. Future filenames will
follow the pattern already established (`v0.1-beta.mdx`), e.g.:

```text
v0.1.1-beta.mdx
v0.2-beta.mdx
v0.5-beta.mdx
v1.0.mdx
```

## Fumadocs compatibility notes

- All content in `docs/OUTPAY_DOCUMENTATION.md` and the changelog files uses
  standard Markdown headings, fenced code blocks with language identifiers,
  tables, and Mermaid code blocks (`` ```mermaid ``) — all natively supported
  by Fumadocs' MDX pipeline without additional configuration.
- The `> [!WARNING]` callout syntax used in the Beta notice is
  GitHub-Flavored-Markdown-style; when migrating to `.mdx`, replace it with
  Fumadocs' `<Callout type="warning">` component if/when the project's
  Fumadocs setup has that component registered. Until then, keep the
  `[!WARNING]` blockquote form, which renders as plain Markdown.
- No custom JSX or MDX components are used anywhere in the source documents
  — they are pure Markdown/CommonMark plus fenced code blocks and Mermaid,
  so they can be copied into `.mdx` files with a `.md` → `.mdx` rename and no
  content changes required as a first pass.
- Internal links in `docs/OUTPAY_DOCUMENTATION.md` use in-page anchor links
  (`#section-name`). When split into separate pages, these must be rewritten
  to relative page links (e.g. `../payments/lifecycle`) per the mapping
  table above.
- Recommended future Fumadocs components, once configured in this project:
  - **Tabs** — for the cURL / JavaScript / Python example groups in the
    endpoint reference.
  - **Steps** — for the "Getting started" quickstart sequences and the
    feature-call workflows.
  - **Callout** — for the repeated Beta-version warnings and the
    "Implementation status" notices, once a suitable component exists.
  - **Cards** — for the top-level section index pages (e.g. linking from
    `api-reference/index.mdx` to each endpoint group).
  - **API reference / OpenAPI-generated pages** — deferred until an OpenAPI
    specification exists; see `docs/OPENAPI_GAP_ANALYSIS.md`.
- Do not add any of the above JSX components to the current `.md` files in
  this repository — they are not yet configured, and per the documentation
  brief, unconfigured custom components must not be used in the Markdown
  deliverables produced now.

## What this plan does not do

This plan does not create `content/docs/`, does not install or configure
Fumadocs, and does not move or delete `docs/OUTPAY_DOCUMENTATION.md` or the
changelog files. It is a reference for whoever performs that migration later.
