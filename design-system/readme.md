# Outpay Design System

Outpay is a non-custodial stablecoin checkout platform for ecommerce merchants. Merchants create USDC checkout links; customers pay directly from a crypto wallet; a backend worker verifies the on-chain transaction and marks the order paid. The MVP scope is **USDC on Base only** — no USDT, no fiat settlement, no custody, no multi-chain, no refunds. Outpay never holds funds: payments go wallet-to-wallet, and the product's job is the checkout experience, payment detection, merchant dashboard, signed webhooks, and a public store directory.

Core users: merchants accepting USDC, customers paying with USDC, and developers integrating checkout links/APIs into their stores.

Core flow: merchant signs up → adds store + wallet address → creates a checkout session → customer opens the checkout page → customer pays the exact USDC amount on Base → a worker detects the payment on-chain → checkout flips to paid → merchant gets a signed webhook → order is confirmed.

Visual direction: modern, trustworthy, fintech-grade, minimal, premium — closer to Stripe / Coinbase Commerce / a modern SaaS dashboard than a "crypto bro" product. Clean layouts, strong spacing, cards, tables, status pills, transaction rows. The customer checkout page in particular must be unambiguous: network + exact-amount warnings are always visible, and the non-custodial nature (wallet-to-wallet, no middleman custody) is stated plainly.

## Sources

This system's visual foundation (color system, type scale, spacing, shadows, and the Button/Badge/Input/Card/Table/Tabs/Switch/Checkbox component patterns) was extracted from the **[supabase/supabase](https://github.com/supabase/supabase)** monorepo (Apache-2.0), specifically:

- `packages/config/css/*.css`, `packages/ui/build/css/**` — the OKLCH-derived semantic color system, Radix-style primitive scales, and light/dark theme inputs
- `packages/ui/src/components/**` and `packages/ui/src/components/shadcn/ui/**` — Button, Badge, Input, Card, Table, Tabs, Switch, Checkbox source (React + Tailwind + class-variance-authority)
- `packages/config/typography.css`, `typography.config.js` — heading/text utility classes
- `apps/www/styles/globals.css` — font stack (Inter / Source Code Pro), body weight, gradient/animation utilities

None of Outpay's own product content (copy, screens, logo) exists in that repo — Supabase is a **visual/system donor only**. Explore the repo further for deeper detail than this extraction captured: component variants, the full Radix color ramps (13 hues × 12 steps), the icon build pipeline (`packages/icons`), and Studio's actual dashboard layouts (`apps/studio`).

No Figma file, screenshot set, or additional codebase was provided for Outpay itself — the product screens in `ui_kits/` are original layouts built to the brief, using the extracted Supabase visual language.

## Intentional additions

Outpay's brief didn't come with a component inventory (no Figma, no existing Outpay codebase) — components below are the standard set a fintech dashboard needs, sized down to what Outpay's 8 screens actually use. `StatusPill` is Supabase's `Badge` renamed for this domain (payment/webhook status, not generic tagging).

## No logo provided

No Outpay logo or brand mark was supplied. Wherever a mark would go, the UI kit renders the wordmark **"Outpay"** in the brand type (Inter, medium weight) — never a drawn/invented logo. Swap in a real mark by dropping files into `assets/logo/` and updating references in the UI kit headers.

## Index

```
styles.css                   — entry point, @imports every token file below
tokens/
  colors-primitives.css      — Radix-style scale colors (amber/blue/red/green/orange/purple/gray/slate/brand), light + dark
  colors-semantic.css        — OKLCH-derived semantic tokens (--background, --foreground, --card, --border, --primary, --destructive, --warning, --info…) + legacy aliases
  theme-light.css            — light theme input overrides (Outpay default)
  theme-dark.css             — dark theme input overrides (alternate)
  spacing.css                — spacing/sizing/radius/border-width/icon-size scale
  typography.css             — type scale + heading-* utility classes
  fonts.css                  — Inter + Source Code Pro (Google Fonts CDN)
  shadows.css                — shadow + focus-ring scale
components/
  core/                      — Button, StatusPill, Card (+Header/Title/Description/Content/Footer), Table (+Header/Body/Row/Head/Cell)
  forms/                     — Input, Switch, Checkbox
  navigation/                — Tabs
guidelines/                  — foundation specimen cards (colors, type, spacing, shadows, icons)
assets/
  icons/                     — Lucide icon usage reference (CDN-loaded, see Iconography)
ui_kits/outpay/              — full click-through product: landing, dashboard, checkout creation, customer checkout, payments, developer/API, store directory, settings
SKILL.md                     — Claude-Code-compatible skill wrapper for this system
```

## Components

- **Button** (`components/core/Button.jsx`) — primary, default, secondary, outline, dashed, text, danger, warning variants; tiny/small/medium/large sizes.
- **StatusPill** (`components/core/StatusPill.jsx`) — default/success/warning/destructive/secondary pill for payment & webhook status.
- **Card** family (`components/core/Card.jsx`) — Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter.
- **Table** family (`components/core/Table.jsx`) — Table, TableHeader, TableBody, TableRow, TableHead, TableCell.
- **Input** (`components/forms/Input.jsx`) — labeled text field with hint/error state.
- **Switch** (`components/forms/Switch.jsx`) — pill toggle.
- **Checkbox** (`components/forms/Checkbox.jsx`) — 16px checkbox.
- **Tabs** (`components/navigation/Tabs.jsx`) — bottom-border tab switcher.

---

## Content fundamentals

Voice extracted from Supabase's own docs/marketing copy patterns (direct, technical, low-hype) and adapted to Outpay's fintech-checkout context.

- **Second person, direct.** "Create a checkout link", "Send the exact USDC amount" — not "Users can create..." Address the merchant or customer directly; imperative mood for actions and warnings.
- **No hype, no crypto slang.** No "moon", "degen", "gm", no rocket emoji, no exclamation-mark enthusiasm. Say "payment confirmed on Base", not "🚀 Payment landed!". This is the single biggest differentiator from typical crypto-product copy.
- **Technical precision over vagueness.** Say the network name (Base), the asset (USDC), the exact amount, the confirmation count — never "your crypto" or "the blockchain". Developer-facing copy (API/webhook pages) can use exact field names and code.
- **Calm urgency for warnings.** Payment-critical warnings ("Send only USDC on Base — other assets will be lost") are stated plainly and visually prominent (bordered warning card), not alarmist. No all-caps, no red-flashing.
- **Non-custodial framing, stated not sold.** Copy quietly reinforces "funds go directly to your wallet" as a fact of how the system works, not a marketing claim repeated for persuasion.
- **No emoji anywhere in product UI.** Emoji appear nowhere in Supabase's own dashboard chrome either — status is communicated with StatusPill color/label, not iconography-as-decoration.
- **Sentence case for UI labels and headings** ("Payment volume", "Create checkout link"), not Title Case Everywhere.
- **Numbers formatted precisely**: "124.00 USDC", "$48,204.12" — always show the currency/asset unit, never a bare number for money.

Example pairs (do / don't):
- Do: "Payment detected on Base. Waiting for 12 confirmations." Don't: "Your payment is being processed! 🎉"
- Do: "This checkout accepts USDC on Base only." Don't: "Pay with your favorite crypto!"
- Do: "Webhook delivery failed (3 attempts). Next retry in 4 minutes." Don't: "Uh oh, something went wrong with your webhook."

## Visual foundations

**Color system.** Not a fixed palette — a small set of theme *inputs* (`--hue`, `--chroma`, `--surface`, `--contrast`, `--foreground-lightness`) drive every semantic color via OKLCH math (`tokens/colors-semantic.css`). Light and dark aren't two hand-tuned palettes; they're the same formulas at different input values (`tokens/theme-light.css` / `theme-dark.css`). Brand hue is a green (`--hue: 159`, Supabase's signature green, ≈`hsl(153°,60%,53%)` at its most saturated step) — carried through unchanged from the source system since no Outpay brand color was supplied. Status colors (warning=amber, destructive=red, info=violet) are fixed-identity, not derived from the neutral ramp, so they stay legible even if the brand hue were retuned.

**Type.** Inter for everything — UI, body, headings (no separate display face; Outpay's dashboard-first product doesn't need one). Source Code Pro for anything code/hash/address-shaped (tx hashes, wallet addresses, API keys, curl examples). Body default is **13px at font-weight 450** — Supabase's own tuned default for Inter legibility, notably not 400. Headings use `heading-meta` (11px mono uppercase, tracked) for table/column labels and small eyebrow text, `heading-title` (22px) for page titles. No large marketing display sizes are used in-product; the landing page is the one surface that goes up to ~44px.

**Spacing.** Off-grid, not 4/8px: base spacing unit is a 2px scale (`--spacing-xs` 4px → `--spacing-xl` 64px), sizing unit is 1.5px (icon containers step 4/6/9/13.5/20.25px). Card padding is 16px horizontal (`--card-padding-x`), 24px on wider panels. Don't round these to the nearest 4px — the off-grid steps are intentional.

**Backgrounds.** Flat surfaces, no gradients, no photography, no illustration, no texture/grain/noise. The one exception is the landing page hero, which may use a very subtle radial brand-green glow behind the headline (Supabase's own marketing pages do this sparingly) — never on dashboard/app surfaces.

**Elevation & shadows.** No floating drop-shadows. Cards are bordered panels with a 1px hairline shadow (`--shadow-xs`) — elevation is communicated by a lightness step (`--elevation-step`) between surface levels (background → card → popover), not by shadow depth. Reserve `--shadow-md`/`--shadow-lg` for actual overlays (dialogs, dropdowns).

**Borders.** Every panel, table, input, and button has a 1px border computed from the foreground color at low alpha (`--border`, `--border-strong` for inputs/hover) — borders are how structure reads in this system, more than shadows or background changes.

**Corner radii.** Small and consistent: 4px default (`--radius-sm`, buttons/inputs), 8px for cards (`--radius-lg`), 16px for large containers/dialogs (`--radius-xl`). Status pills are fully round (999px). No large "friendly" 24px+ radii anywhere.

**Hover / press states.** Hover: background lightens toward the next elevation step (buttons/rows) or border darkens one step (`--border-strong` → `--border-stronger`) — never a color-family change (e.g. gray → blue). Press/active: same direction, one step further, no scale/shrink transforms. Transitions are quick, 150–200ms ease-out — no bounce, no spring easing anywhere in the source system.

**Focus states.** 2px ring, offset 2px from the control, colored `--ring` (brand-tinted at 55% alpha). Applied via `box-shadow`, not `outline`, so it respects border-radius.

**Animation.** Minimal and functional only: fades (`fade-in`, 200–400ms cubic-bezier ease), a spinner for loading buttons, a slide-in for toasts. No bounce/spring, no decorative looping animation on product surfaces. The one looping animation in the source (`auth-container` gradient shift) is marketing-page-only.

**Transparency & blur.** Used narrowly: popover/overlay scrims at ~80% opacity, focus rings and status-pill fills use alpha over solid colors rather than blend modes. No frosted-glass/backdrop-blur panels in the source system — skip that trope here too.

**Imagery.** None supplied and none invented. No photography color-grade to speak of; if the user supplies real photography later, keep it real (no stock-photo crypto renders — no 3D coins, no glowing blockchain-node graphics).

## Iconography

Supabase's own products use **[Lucide](https://lucide.dev)** (`lucide-react`) as the general-purpose icon set throughout Button/Table/Menu components (`Loader2`, `Check`, `ArrowUp/Down`, `ChevronsUpDown` appear directly in the extracted source), plus a small custom icon package (`packages/icons`) for Supabase-specific marks (Database, Auth, BucketAdd) that don't apply to Outpay's domain.

For this design system: **use Lucide via CDN**, referenced as `<img src="https://unpkg.com/lucide-static@latest/icons/{name}.svg">` or inlined via the `lucide` UMD script — see `guidelines/icons.card.html` for the exact set used across the Outpay UI kit (wallet, qr-code, copy, check-circle, alert-triangle, webhook, key, external-link, arrow-right, chevron-down, search, settings, store). No PNG icon sets, no icon font, no emoji anywhere in product UI (see Content Fundamentals). Stroke width 2px at 16–20px is the default Lucide look used throughout; don't mix in a filled icon style.
