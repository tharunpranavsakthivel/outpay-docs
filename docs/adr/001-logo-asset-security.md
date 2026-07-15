# 001: Restrict public logo assets to current raster logos

## Status

Accepted

## Context

Store logos are displayed on public checkout pages, so the image endpoint must
remain publicly readable. The previous implementation accepted SVG uploads and
looked up any `file_assets` row by ID, which allowed uploaded SVG content to be
served as active content and allowed historical or orphaned assets to remain
publicly fetchable.

## Decision

Only PNG, JPEG, and WebP logos are accepted. The public endpoint serves an asset
only when its ID is the current `merchants.logo_asset_id` for an active merchant,
and it rejects all other MIME types at the database lookup boundary. Replacing a
logo removes the old `file_assets` row in the same transaction as the pointer
update, then deletes the old object from Tigris after commit. Raster responses
also include a restrictive CSP and `nosniff` header.

## Consequences

Vector logos are not supported, which avoids SVG sanitization complexity and
stored-XSS risk. Public URLs for replaced logos stop resolving, although a
previously cached response may remain in an external cache until its cache
entry expires. If object deletion fails after a successful database update, the
row is already inaccessible through the application and the failure is emitted
as a structured operational log for cleanup.
