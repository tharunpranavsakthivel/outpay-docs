Button — the primary interactive element for actions (submit, confirm, navigate). Use `primary` for the single most important action on a screen (e.g. "Create checkout link"), `default`/`outline` for secondary actions, `text` for the lowest-emphasis inline action, `danger` for destructive confirmations.

```jsx
<Button variant="primary" size="small">Create checkout link</Button>
<Button variant="outline" icon={<CopyIcon />}>Copy link</Button>
<Button variant="danger" size="tiny">Revoke key</Button>
```

Variants: primary, default, secondary, outline, dashed, text, danger, warning.
Sizes: tiny (26px), small (34px), medium (38px), large (42px).
Props: `block` stretches full-width; `rounded` makes it a pill; `icon`/`iconRight` accept any node (an <img> tag pointing at a Lucide icon, typically).
