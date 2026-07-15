<!--
  ADR for the T-43 usage-metering and platform-fee ledger boundary.
  The database trigger keeps payment settlement and billing accounting atomic.
-->

# Usage metering on confirmed payments

## Status

Accepted

## Context

The pricing page promises 1,000 free confirmed paid transactions per month and
a 1.5% fee after that allowance, but the original billing tables were removed
by migration 0010 because no consumer existed. T-6 now persists payment rows
through a worker transaction that can first write `pending` and later update
the same row to `paid`.

## Decision

Migration 0012 restores the pricing, plan-assignment, monthly-usage, and fee
ledger tables, seeds `free`, `standard_usage`, and `corporate`, and installs an
`after insert or update of status` trigger on `payments`. The trigger meters
only a transition into `paid`, locks the merchant-month row while incrementing
it, and inserts one usage-fee ledger entry per billable payment. The default
merchant plan is `standard_usage`; corporate terms are represented as a plan
record but are not automatically inferred from volume.

## Consequences

Payment settlement and usage accounting commit or roll back together, and
worker retries cannot double-count a payment. A database migration must be
applied before payment workers start using the restored tables. Manual plan
changes can be made through `merchant_plan_assignments`; the Settings page
reads the current effective plan and month-to-date counters.
