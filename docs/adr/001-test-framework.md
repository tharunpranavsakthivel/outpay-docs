<!--
  ADR for the repository test runner and disposable integration database.
  It documents the compatibility choice so future suites can use Vitest APIs
  directly without losing coverage from the existing Bun-native tests.
-->

# Test framework and disposable database

## Status

Accepted

## Context

Outpay already has server and worker regression suites written against
`bun:test`, but it had no browser runner, component-test setup, or documented
way to apply migrations against a clean PostgreSQL instance. The project uses
TypeScript, ESM, React, and Next.js 16.

## Decision

Use Vitest as the primary unit/integration-adjacent runner, Testing Library for
React DOM assertions, and Playwright for browser tests. A small compatibility
module maps the existing `bun:test` imports to Vitest so the current suites can
be migrated incrementally. Use `docker-compose.test.yml` for an opt-in,
tmpfs-backed PostgreSQL 16 service with fixed non-production credentials.

## Consequences

`bun run test` is the CI unit-suite entry point and `bun run test:watch` is the
local feedback loop. New tests should import from `vitest` directly. Tests that
need real migrations can use the compose service and a `TEST_DATABASE_URL`
pointing only at `127.0.0.1:55432`; no application `.env` values are loaded by
the test database definition.
