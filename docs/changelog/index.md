---
title: Changelog
description: Product, API, infrastructure, security, and developer-experience changes across Outpay releases.
---

# Changelog

Outpay is currently in **v0.1 Beta**.

The changelog records meaningful changes to the product, public APIs, the
checkout experience, blockchain payment processing, the database schema,
deployment configuration, security controls, and developer tooling.

> [!WARNING]
> Beta releases do not guarantee backward compatibility. Review this
> changelog before updating a deployed Outpay instance or a merchant
> integration built against `/api/v1/*` or the merchant-webhook payload.

## Releases

| Version | Channel | Release date | Status |
|---|---|---|---|
| [v0.1 Beta](./v0.1-beta.md) | Beta | Not verified | Current |

No git tags or GitHub releases exist in this repository at the time this
changelog was written, so no release date can be independently verified for
v0.1 Beta. See [v0.1 Beta → Repository evidence](./v0.1-beta.md#repository-evidence)
for the sources this release's contents were derived from.

## Upcoming changes

Changes not yet included in a published version are recorded in
[Unreleased](./unreleased.md).

## Changelog categories

Each versioned release page is organized under: Release summary, Available
features, Dashboard, Hosted checkout, Payment processing, Blockchain
integration, API and authentication, Webhooks, Database and migrations,
Deployment and infrastructure, Security, Developer experience, Known
limitations, Breaking-change risk, Upgrade guidance, and Repository
evidence. The [Unreleased](./unreleased.md) page uses the standard
Keep-a-Changelog categories: Added, Changed, Deprecated, Removed, Fixed,
Security, plus Outpay-specific Database migrations, API changes, Webhook
changes, Infrastructure, and Documentation sections.

## Versioning policy

```text
Patch: Backward-compatible bug fixes
Minor: Backward-compatible functionality
Major: Breaking stable-interface changes
Pre-release: Beta or release-candidate versions before stable v1.0
```

Outpay has not yet adopted a stricter compatibility policy than this. Until
v1.0, **any** release — including a patch-labeled one — may contain a
breaking change to an API route, JSON field name, webhook payload,
environment variable, or database migration. Do not assume semantic
versioning's usual patch/minor guarantees apply below v1.0 unless a future
release explicitly states otherwise.

## Changelog maintenance policy

Future changes should first be added to [`unreleased.md`](./unreleased.md),
under the category that best describes them.

Before publishing a new release, whoever is preparing it should:

1. Move the relevant `unreleased.md` entries into a new versioned page
   (e.g. `v0.1.1-beta.md`).
2. Add the version number and, if known, the release date — write
   `Not verified` rather than guessing.
3. Verify the functionality described actually works as stated.
4. Add migration instructions for any new/changed database migrations.
5. Add environment-variable changes (new, removed, or renamed).
6. Add API compatibility notes (breaking vs. additive).
7. Add webhook compatibility notes (new event types, payload changes).
8. Update the "Current version" row in the release-history table above.
9. Update the release-history table with the new row.
10. Reset the `unreleased.md` categories to empty.
11. Create (or verify) a corresponding Git tag for the release.

This policy is new as of this documentation pass — no prior release has
gone through it, since v0.1 Beta is the first documented release.
