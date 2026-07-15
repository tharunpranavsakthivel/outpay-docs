/* @ds-bundle: {"format":4,"namespace":"OutpayDesignSystem_3f8d0c","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"CardTitle","sourcePath":"components/core/Card.jsx"},{"name":"CardDescription","sourcePath":"components/core/Card.jsx"},{"name":"CardContent","sourcePath":"components/core/Card.jsx"},{"name":"CardFooter","sourcePath":"components/core/Card.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"},{"name":"Table","sourcePath":"components/core/Table.jsx"},{"name":"TableHeader","sourcePath":"components/core/Table.jsx"},{"name":"TableBody","sourcePath":"components/core/Table.jsx"},{"name":"TableRow","sourcePath":"components/core/Table.jsx"},{"name":"TableHead","sourcePath":"components/core/Table.jsx"},{"name":"TableCell","sourcePath":"components/core/Table.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Button.jsx":"b860ae347b02","components/core/Card.jsx":"151ae1643908","components/core/StatusPill.jsx":"f31f6f412f0a","components/core/Table.jsx":"b727ba690617","components/forms/Checkbox.jsx":"cab958c8abf8","components/forms/Input.jsx":"d204543fa683","components/forms/Switch.jsx":"f7d59c9661a3","components/navigation/Tabs.jsx":"d8baa1e48081","ui_kits/outpay/CreateCheckout.jsx":"3226b6aa0340","ui_kits/outpay/CustomerCheckout.jsx":"1328ca9ec63d","ui_kits/outpay/Dashboard.jsx":"72fd4963ae89","ui_kits/outpay/Developer.jsx":"fcd86ccdaf81","ui_kits/outpay/Icon.jsx":"c80b5c91cf7e","ui_kits/outpay/Landing.jsx":"5ad9ade2e585","ui_kits/outpay/Payments.jsx":"984f74157499","ui_kits/outpay/Settings.jsx":"b9af4c0cbc19","ui_kits/outpay/Shell.jsx":"34ceffdf316e","ui_kits/outpay/StoreDirectory.jsx":"27c8706fd6b8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OutpayDesignSystem_3f8d0c = window.OutpayDesignSystem_3f8d0c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary interactive element. Variants and sizing extracted
 * verbatim from Supabase's packages/ui/src/components/Button/Button.tsx
 * (class-variance-authority variants), translated to inline styles.
 */

const SIZES = {
  tiny: {
    fontSize: 'var(--text-xs)',
    padding: '4px 10px',
    height: 26,
    gap: 6
  },
  small: {
    fontSize: 13,
    padding: '8px 12px',
    height: 34,
    gap: 8
  },
  medium: {
    fontSize: 13,
    padding: '8px 16px',
    height: 38,
    gap: 8
  },
  large: {
    fontSize: 'var(--text-base)',
    padding: '8px 16px',
    height: 42,
    gap: 8
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--color-brand-400)',
    color: 'var(--foreground-default)',
    border: '1px solid color-mix(in oklch, var(--color-brand-500) 75%, transparent)'
  },
  default: {
    background: 'var(--background-alternative-default)',
    color: 'var(--foreground-default)',
    border: '1px solid var(--border-strong)'
  },
  secondary: {
    background: 'var(--foreground-default)',
    color: 'var(--background-default)',
    border: '1px solid var(--foreground-light)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--foreground-default)',
    border: '1px solid var(--border-strong)'
  },
  dashed: {
    background: 'transparent',
    color: 'var(--foreground-default)',
    border: '1px dashed var(--border-strong)'
  },
  text: {
    background: 'transparent',
    color: 'var(--foreground-default)',
    border: '1px solid transparent'
  },
  danger: {
    background: 'var(--color-red-300)',
    color: 'var(--foreground-default)',
    border: '1px solid var(--border-destructive)'
  },
  warning: {
    background: 'var(--color-amber-300)',
    color: 'var(--foreground-default)',
    border: '1px solid var(--border-warning)'
  }
};
function Button({
  variant = 'primary',
  size = 'small',
  block = false,
  disabled = false,
  rounded = false,
  icon,
  iconRight,
  children,
  style,
  onClick,
  type = 'button',
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.small;
  const [hover, setHover] = React.useState(false);
  const hoverBg = {
    primary: 'color-mix(in oklch, var(--color-brand-400) 80%, transparent)',
    default: 'var(--background-selection)',
    secondary: 'var(--foreground-default)',
    outline: 'transparent',
    dashed: 'transparent',
    text: 'var(--background-selection)',
    danger: 'var(--color-red-400)',
    warning: 'var(--color-amber-400)'
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      fontFamily: 'var(--font-sans)',
      fontSize: s.fontSize,
      fontWeight: 450,
      padding: s.padding,
      height: s.height,
      borderRadius: rounded ? 999 : 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'all 0.2s ease-out',
      whiteSpace: 'nowrap',
      ...v,
      background: hover && !disabled ? hoverBg : v.background,
      ...style
    }
  }, rest), icon, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card + CardHeader/CardTitle/CardDescription/CardContent/CardFooter.
 * Extracted from Supabase's shadcn/ui/card.tsx: bordered panel with a
 * hairline shadow (not a floating drop-shadow), mono uppercase title,
 * 16px horizontal padding (--card-padding-x), borders between sections.
 */

function Card({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      overflow: 'hidden',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-default)',
      background: 'var(--background-surface-100)',
      color: 'var(--foreground-default)',
      boxShadow: 'var(--shadow-xs)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), children);
}
function CardHeader({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      padding: '16px var(--card-padding-x)',
      borderBottom: '1px solid var(--border-default)',
      ...style
    }
  }, rest), children);
}
function CardTitle({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("h3", _extends({
    style: {
      fontSize: 12,
      fontFamily: 'var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      margin: 0,
      color: 'var(--foreground-default)',
      fontWeight: 500,
      ...style
    }
  }, rest), children);
}
function CardDescription({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      fontSize: 13,
      color: 'var(--foreground-lighter)',
      margin: 0,
      ...style
    }
  }, rest), children);
}
function CardContent({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: '16px var(--card-padding-x)',
      borderBottom: '1px solid var(--border-default)',
      ...style
    }
  }, rest), children);
}
function CardFooter({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '16px var(--card-padding-x)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status/label pill. Extracted verbatim from Supabase's
 * shadcn/ui/badge.tsx: uppercase, tight tracking, 9px text, full pill radius.
 * Renamed StatusPill in this design system since Outpay uses it primarily
 * for payment/webhook status (Paid, Pending, Failed) rather than generic tags.
 */

const VARIANTS = {
  default: {
    background: 'var(--background-surface-75)',
    color: 'var(--foreground-light)',
    border: '1px solid var(--border-strong)'
  },
  success: {
    background: 'color-mix(in oklch, var(--color-brand-900) 10%, transparent)',
    color: 'var(--color-brand-900)',
    border: '1px solid var(--border-brand)'
  },
  warning: {
    background: 'color-mix(in oklch, var(--warning) 10%, transparent)',
    color: 'var(--warning)',
    border: '1px solid var(--border-warning)'
  },
  destructive: {
    background: 'color-mix(in oklch, var(--destructive) 10%, transparent)',
    color: 'var(--destructive)',
    border: '1px solid var(--border-destructive)'
  },
  secondary: {
    background: 'var(--secondary)',
    color: 'var(--secondary-foreground)',
    border: '1px solid transparent'
  }
};
function StatusPill({
  variant = 'default',
  children,
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      justifyContent: 'center',
      borderRadius: 999,
      fontWeight: 500,
      whiteSpace: 'nowrap',
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      fontSize: 9,
      lineHeight: 1,
      padding: '4px 7px',
      fontFamily: 'var(--font-sans)',
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/core/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Table + TableHeader/TableBody/TableRow/TableHead/TableCell.
 * Extracted from Supabase's shadcn/ui/table.tsx: mono-uppercase heading-meta
 * column labels, row hover highlight, hairline row borders.
 */

function Table({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("table", _extends({
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 13,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), children);
}
function TableHeader({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("thead", rest, children);
}
function TableBody({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("tbody", rest, children);
}
function TableRow({
  children,
  style,
  hoverable = true,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("tr", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderBottom: '1px solid var(--border-default)',
      background: hoverable && hover ? 'var(--background-surface-200)' : 'transparent',
      transition: 'background 0.1s ease',
      ...style
    }
  }, rest), children);
}
function TableHead({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("th", _extends({
    style: {
      height: 40,
      padding: '0 16px',
      textAlign: 'left',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',
      fontSize: 11,
      fontFamily: 'var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      fontWeight: 500,
      color: 'var(--foreground-lighter)',
      ...style
    }
  }, rest), children);
}
function TableCell({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("td", _extends({
    style: {
      padding: 16,
      verticalAlign: 'middle',
      color: 'var(--foreground-default)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Table, TableHeader, TableBody, TableRow, TableHead, TableCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Table.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * Checkbox — extracted from Supabase's shadcn/ui/checkbox.tsx: 16x16,
 * rounded-sm, filled with foreground color + inverted checkmark when checked.
 */
function Checkbox({
  checked,
  onChange,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "checkbox",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => onChange?.(!checked),
    style: {
      width: 16,
      height: 16,
      borderRadius: 4,
      border: `1px solid ${checked ? 'transparent' : 'var(--border-control)'}`,
      background: checked ? 'var(--foreground-default)' : 'color-mix(in oklch, var(--background-control) 25%, transparent)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      padding: 0
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--background-default)",
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field. Extracted from Supabase's shadcn/ui/input.tsx:
 * subtle translucent fill (foreground at 2.6% alpha), control border,
 * 2px focus ring offset by 2px. `size="small"` (34px) is Supabase's default.
 */
const HEIGHTS = {
  tiny: 26,
  small: 34,
  medium: 38,
  large: 42
};
function Input({
  size = 'small',
  label,
  hint,
  error,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const field = /*#__PURE__*/React.createElement("input", _extends({
    onFocus: e => {
      setFocused(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur?.(e);
    },
    style: {
      height: HEIGHTS[size] || 34,
      width: '100%',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${error ? 'var(--destructive)' : 'var(--border-control)'}`,
      background: error ? 'color-mix(in oklch, var(--destructive) 8%, var(--background))' : 'color-mix(in oklch, var(--foreground) 2.6%, var(--background))',
      color: 'var(--foreground-default)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      padding: '0 12px',
      outline: 'none',
      boxShadow: focused ? 'var(--focus-ring)' : 'none',
      transition: 'box-shadow 0.15s ease',
      boxSizing: 'border-box',
      ...style
    }
  }, rest));
  if (!label && !hint && !error) return field;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--foreground-default)'
    }
  }, label), field, (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--destructive)' : 'var(--foreground-lighter)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * Switch — extracted from Supabase's shadcn/ui/switch.tsx: pill track,
 * brand-green when checked, thumb slides with a shadow.
 */
const SIZES = {
  small: {
    w: 28,
    h: 16,
    thumb: 12
  },
  medium: {
    w: 34,
    h: 20,
    thumb: 16
  },
  large: {
    w: 44,
    h: 24,
    thumb: 18
  }
};
function Switch({
  checked,
  onChange,
  size = 'medium',
  disabled = false
}) {
  const s = SIZES[size] || SIZES.medium;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => onChange?.(!checked),
    style: {
      width: s.w,
      height: s.h,
      borderRadius: 999,
      border: '1px solid transparent',
      background: checked ? 'var(--color-brand-900)' : 'var(--background-control)',
      position: 'relative',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background 0.15s ease',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: (s.h - s.thumb) / 2 - 1,
      left: checked ? s.w - s.thumb - 3 : 1,
      width: s.thumb,
      height: s.thumb,
      borderRadius: '50%',
      background: checked ? '#fff' : 'var(--foreground-lighter)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left 0.15s ease'
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Tabs — extracted from Supabase's shadcn/ui/tabs.tsx: bottom-border list,
 * active tab gets a 2px foreground underline, inactive tabs are lighter.
 */
function Tabs({
  value,
  onChange,
  tabs,
  children
}) {
  const [internal, setInternal] = React.useState(tabs?.[0]?.value);
  const active = value ?? internal;
  const setActive = onChange ?? setInternal;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      borderBottom: '1px solid var(--border-default)'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.value,
    onClick: () => setActive(t.value),
    style: {
      background: 'none',
      border: 'none',
      borderBottom: `2px solid ${active === t.value ? 'var(--foreground-default)' : 'transparent'}`,
      color: active === t.value ? 'var(--foreground-default)' : 'var(--foreground-lighter)',
      padding: '8px 2px',
      fontSize: 13,
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, children(active)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/outpay/CreateCheckout.jsx
try { (() => {
(function () {
  const {
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    Input
  } = window.OutpayDesignSystem_3f8d0c;
  const {
    PageHeader
  } = window;
  function CreateCheckout({
    onGenerate
  }) {
    const [amount, setAmount] = React.useState('124.00');
    const [label, setLabel] = React.useState('Order #4471');
    const [generated, setGenerated] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
      title: "Create checkout",
      description: "Generate a USDC payment link for a customer order."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '24px 32px',
        display: 'grid',
        gridTemplateColumns: '1fr 340px',
        gap: 24,
        maxWidth: 920
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Checkout details"), /*#__PURE__*/React.createElement(CardDescription, null, "USDC on Base \u2014 this MVP does not support other assets or networks.")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        borderBottom: 'none'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Order label",
      value: label,
      onChange: e => setLabel(e.target.value)
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Amount (USDC)",
      value: amount,
      onChange: e => setAmount(e.target.value)
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 500,
        marginBottom: 6
      }
    }, "Network"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '10px 12px',
        borderRadius: 6,
        border: '1px solid var(--border-brand)',
        background: 'color-mix(in oklch, var(--color-brand-900) 6%, transparent)',
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "https://unpkg.com/lucide-static@latest/icons/badge-check.svg",
      width: 15,
      height: 15,
      alt: ""
    }), "Base \u2014 fixed for this MVP, cannot be changed"))), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        display: 'flex',
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => setGenerated(true)
    }, "Generate payment link"))), /*#__PURE__*/React.createElement(Card, {
      style: {
        height: 'fit-content'
      }
    }, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Preview")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        borderBottom: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--foreground-lighter)'
      }
    }, label || 'Order label'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 28,
        fontWeight: 500
      }
    }, amount || '0.00', " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: 'var(--foreground-lighter)'
      }
    }, "USDC")), generated ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontFamily: 'var(--font-mono)',
        color: 'var(--foreground-light)',
        wordBreak: 'break-all',
        background: 'var(--background-surface-200)',
        padding: 8,
        borderRadius: 6
      }
    }, "outpay.link/c/8f2a91b4e6d7"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "tiny",
      onClick: onGenerate
    }, "Open customer view \u2192")) : /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--foreground-lighter)'
      }
    }, "Generate a link to preview the customer checkout page.")))));
  }
  window.CreateCheckout = CreateCheckout;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/outpay/CreateCheckout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/outpay/CustomerCheckout.jsx
try { (() => {
(function () {
  const {
    Button,
    StatusPill
  } = window.OutpayDesignSystem_3f8d0c;
  function CustomerCheckout({
    onBack
  }) {
    const [status, setStatus] = React.useState('waiting'); // waiting | detected | confirmed
    const address = '0x8f2a91b4e6d7c3a0f251b8d9e4c6a7f3b91c91d4';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: '100vh',
        background: 'var(--background-default)',
        fontFamily: 'var(--font-sans)',
        color: 'var(--foreground-default)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 420,
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-sm)',
        overflow: 'hidden',
        background: 'var(--card)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '20px 24px',
        borderBottom: '1px solid var(--border-default)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 18,
        height: 18,
        borderRadius: 5,
        background: 'var(--color-brand-900)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        fontSize: 14
      }
    }, "Acme Coffee Co.")), onBack && /*#__PURE__*/React.createElement("button", {
      onClick: onBack,
      style: {
        border: 'none',
        background: 'none',
        fontSize: 12,
        color: 'var(--foreground-lighter)',
        cursor: 'pointer'
      }
    }, "\u2190 back")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--foreground-lighter)',
        marginBottom: 4
      }
    }, "Order #4471"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 34,
        fontWeight: 500
      }
    }, "124.00 ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        color: 'var(--foreground-lighter)'
      }
    }, "USDC"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'flex-start',
        fontSize: 12,
        lineHeight: 1.5,
        background: 'color-mix(in oklch, var(--warning) 10%, var(--background))',
        border: '1px solid var(--border-warning)',
        borderRadius: 8,
        padding: 12,
        color: 'var(--foreground-default)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "https://unpkg.com/lucide-static@latest/icons/alert-triangle.svg",
      width: 15,
      height: 15,
      style: {
        flexShrink: 0,
        marginTop: 1
      },
      alt: ""
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Base network only."), " Send exactly ", /*#__PURE__*/React.createElement("strong", null, "124.00 USDC"), " on Base. Sending any other asset, amount, or network will result in permanent loss of funds.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        padding: '8px 0'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=ethereum:${address}@8453?amount=124.00`,
      width: 160,
      height: 160,
      alt: "Payment QR code",
      style: {
        border: '1px solid var(--border-default)',
        borderRadius: 8
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontFamily: 'var(--font-mono)',
        color: 'var(--foreground-light)',
        wordBreak: 'break-all',
        textAlign: 'center'
      }
    }, address)), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      block: true,
      onClick: () => setStatus('detected'),
      disabled: status !== 'waiting'
    }, status === 'waiting' ? 'Pay with wallet' : 'Waiting for confirmation…'), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: 12,
        padding: '10px 12px',
        background: 'var(--background-surface-200)',
        borderRadius: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--foreground-lighter)'
      }
    }, "Payment status"), status === 'waiting' && /*#__PURE__*/React.createElement(StatusPill, {
      variant: "default"
    }, "Awaiting payment"), status === 'detected' && /*#__PURE__*/React.createElement(StatusPill, {
      variant: "warning"
    }, "Detected \u2014 confirming"), status === 'confirmed' && /*#__PURE__*/React.createElement(StatusPill, {
      variant: "success"
    }, "Paid")), status === 'detected' && /*#__PURE__*/React.createElement("button", {
      onClick: () => setStatus('confirmed'),
      style: {
        fontSize: 11,
        color: 'var(--foreground-lighter)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textDecoration: 'underline'
      }
    }, "(demo) simulate confirmation"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--foreground-lighter)',
        textAlign: 'center',
        lineHeight: 1.5
      }
    }, "Non-custodial: this payment goes directly from your wallet to the merchant's wallet. Outpay never holds your funds."))));
  }
  window.CustomerCheckout = CustomerCheckout;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/outpay/CustomerCheckout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/outpay/Dashboard.jsx
try { (() => {
(function () {
  const {
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    StatusPill,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell
  } = window.OutpayDesignSystem_3f8d0c;
  const {
    PageHeader
  } = window;
  const METRICS = [{
    label: 'Payment volume (30d)',
    value: '$48,204.12',
    sub: '312 checkouts'
  }, {
    label: 'Paid checkouts',
    value: '287',
    sub: '92% completion'
  }, {
    label: 'Pending checkouts',
    value: '9',
    sub: 'awaiting confirmation'
  }, {
    label: 'Webhook success rate',
    value: '99.4%',
    sub: '3 retried, 0 dropped'
  }];
  const RECENT = [{
    id: 'ch_8f2a91',
    customer: '0x71C7...976F',
    amount: '124.00 USDC',
    status: 'success',
    label: 'Paid'
  }, {
    id: 'ch_1b7e44',
    customer: '0x4A2f...11cD',
    amount: '58.50 USDC',
    status: 'warning',
    label: 'Pending'
  }, {
    id: 'ch_9d3c02',
    customer: '0xE81b...f7A2',
    amount: '312.00 USDC',
    status: 'success',
    label: 'Paid'
  }, {
    id: 'ch_5a7f19',
    customer: '0x2c9D...66Ba',
    amount: '19.99 USDC',
    status: 'destructive',
    label: 'Expired'
  }];
  function Dashboard({
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
      title: "Dashboard",
      description: "Payment volume and checkout status across your store.",
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        onClick: () => onNavigate('checkouts')
      }, "Create checkout")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '24px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 16
      }
    }, METRICS.map(m => /*#__PURE__*/React.createElement(Card, {
      key: m.label
    }, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        borderBottom: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "heading-meta",
      style: {
        color: 'var(--foreground-lighter)',
        marginBottom: 8
      }
    }, m.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 24,
        fontWeight: 500
      }
    }, m.value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--foreground-lighter)',
        marginTop: 4
      }
    }, m.sub))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Recent checkouts"), /*#__PURE__*/React.createElement(CardDescription, null, "Latest payment activity across your store")), /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Checkout"), /*#__PURE__*/React.createElement(TableHead, null, "Customer wallet"), /*#__PURE__*/React.createElement(TableHead, null, "Amount"), /*#__PURE__*/React.createElement(TableHead, null, "Status"))), /*#__PURE__*/React.createElement(TableBody, null, RECENT.map(r => /*#__PURE__*/React.createElement(TableRow, {
      key: r.id
    }, /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12
      }
    }, r.id), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--foreground-light)'
      }
    }, r.customer), /*#__PURE__*/React.createElement(TableCell, null, r.amount), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusPill, {
      variant: r.status
    }, r.label)))))))));
  }
  window.Dashboard = Dashboard;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/outpay/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/outpay/Developer.jsx
try { (() => {
(function () {
  const {
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    StatusPill
  } = window.OutpayDesignSystem_3f8d0c;
  const {
    PageHeader
  } = window;
  const CURL = `curl -X POST https://api.outpay.dev/v1/checkouts \\
  -H "Authorization: Bearer OUTPAY_SECRET_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": "124.00",
    "currency": "USDC",
    "network": "base",
    "label": "Order #4471"
  }'`;
  const WEBHOOK_PAYLOAD = `{
  "event": "checkout.paid",
  "checkout_id": "ch_8f2a91b4",
  "amount": "124.00",
  "currency": "USDC",
  "network": "base",
  "tx_hash": "0x8f2a91b4e6d7c3a0f251b8d9e4c6a7f3b91c91d4",
  "confirmed_at": "2026-07-05T18:42:11Z"
}`;
  function CodeBlock({
    children
  }) {
    return /*#__PURE__*/React.createElement("pre", {
      style: {
        margin: 0,
        padding: 16,
        borderRadius: 8,
        background: 'var(--background-surface-200)',
        border: '1px solid var(--border-muted)',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        lineHeight: 1.6,
        color: 'var(--foreground-default)',
        overflowX: 'auto'
      }
    }, children);
  }
  function Developer() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
      title: "Developers",
      description: "API keys, checkout creation API, and signed webhooks."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '24px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        maxWidth: 760
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
      style: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CardTitle, null, "API keys"), /*#__PURE__*/React.createElement(CardDescription, null, "Used to authenticate checkout-creation requests")), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "tiny"
    }, "Hide key")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13
      }
    }, "OUTPAY_LIV\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"), /*#__PURE__*/React.createElement(StatusPill, {
      variant: "success"
    }, "Active"))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Create a checkout"), /*#__PURE__*/React.createElement(CardDescription, null, "POST /v1/checkouts")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        borderBottom: 'none'
      }
    }, /*#__PURE__*/React.createElement(CodeBlock, null, CURL))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Webhook payload"), /*#__PURE__*/React.createElement(CardDescription, null, "Sent to your endpoint on checkout.paid, signed with HMAC-SHA256 (X-Outpay-Signature header)")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        borderBottom: 'none'
      }
    }, /*#__PURE__*/React.createElement(CodeBlock, null, WEBHOOK_PAYLOAD)))));
  }
  window.Developer = Developer;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/outpay/Developer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/outpay/Icon.jsx
try { (() => {
(function () {
  function Icon({
    name,
    size = 16,
    style,
    invert = false
  }) {
    return /*#__PURE__*/React.createElement("img", {
      src: `https://unpkg.com/lucide-static@latest/icons/${name}.svg`,
      width: size,
      height: size,
      alt: "",
      style: {
        display: 'block',
        filter: invert ? 'invert(1)' : 'none',
        opacity: 0.85,
        ...style
      }
    });
  }
  window.Icon = Icon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/outpay/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/outpay/Landing.jsx
try { (() => {
(function () {
  const {
    Button
  } = window.OutpayDesignSystem_3f8d0c;
  function Landing({
    onGetStarted,
    onViewDirectory
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--background-default)',
        color: 'var(--foreground-default)',
        fontFamily: 'var(--font-sans)',
        minHeight: '100vh'
      }
    }, /*#__PURE__*/React.createElement("header", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 40px',
        borderBottom: '1px solid var(--border-default)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 22,
        height: 22,
        borderRadius: 6,
        background: 'var(--color-brand-900)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        fontSize: 15
      }
    }, "Outpay")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 24,
        fontSize: 13,
        color: 'var(--foreground-light)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("a", {
      onClick: onViewDirectory,
      style: {
        cursor: 'pointer'
      }
    }, "Store directory"), /*#__PURE__*/React.createElement("span", null, "Developers"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "tiny",
      onClick: onGetStarted
    }, "Get started"))), /*#__PURE__*/React.createElement("section", {
      style: {
        textAlign: 'center',
        padding: '100px 24px 80px',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: -200,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 700,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, color-mix(in oklch, var(--color-brand-900) 18%, transparent) 0%, transparent 70%)',
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "heading-meta",
      style: {
        color: 'var(--color-brand-900)',
        marginBottom: 16
      }
    }, "USDC checkout for ecommerce"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 48,
        fontWeight: 500,
        letterSpacing: '-0.02em',
        margin: '0 0 20px',
        maxWidth: 720,
        marginInline: 'auto',
        lineHeight: 1.15
      }
    }, "Accept USDC. Get paid directly to your wallet."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        color: 'var(--foreground-light)',
        maxWidth: 520,
        margin: '0 auto 32px',
        lineHeight: 1.6
      }
    }, "Outpay is a non-custodial checkout for stablecoin payments on Base. No middleman holds your funds \u2014 customers pay, you receive it directly."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "medium",
      onClick: onGetStarted
    }, "Get started"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "medium"
    }, "View docs")))), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 900,
        margin: '0 auto',
        padding: '0 24px 100px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24
      }
    }, [{
      icon: 'wallet',
      title: 'Wallet-to-wallet',
      body: "Funds move directly from your customer's wallet to yours. Outpay never takes custody."
    }, {
      icon: 'badge-check',
      title: 'Verified on-chain',
      body: 'Every payment is confirmed against the Base blockchain before an order is marked paid.'
    }, {
      icon: 'webhook',
      title: 'Signed webhooks',
      body: 'Get a signed checkout.paid webhook the moment a payment confirms — build your own flow.'
    }].map(f => /*#__PURE__*/React.createElement("div", {
      key: f.title,
      style: {
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: `https://unpkg.com/lucide-static@latest/icons/${f.icon}.svg`,
      width: 22,
      height: 22,
      style: {
        marginBottom: 12
      },
      alt: ""
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 500,
        fontSize: 15,
        marginBottom: 6
      }
    }, f.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--foreground-lighter)',
        lineHeight: 1.6
      }
    }, f.body)))));
  }
  window.Landing = Landing;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/outpay/Landing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/outpay/Payments.jsx
try { (() => {
(function () {
  const {
    Input,
    StatusPill,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell
  } = window.OutpayDesignSystem_3f8d0c;
  const {
    PageHeader
  } = window;
  const PAYMENTS = [{
    hash: '0x8f2a91b4e6d7c3a0f251b8d9e4c6a7f3b91c91d4',
    from: '0x71C7...976F',
    to: '0x4d92...aa10',
    amount: '124.00 USDC',
    status: 'success',
    label: 'Confirmed'
  }, {
    hash: '0x1b7e44a9c0e2b6f183d5a7c9e0b4f6a8c2d1e441',
    from: '0x4A2f...11cD',
    to: '0x4d92...aa10',
    amount: '58.50 USDC',
    status: 'warning',
    label: 'Confirming'
  }, {
    hash: '0x9d3c02f7a1b5e8c4d09263a7f5b1e9c8d4a09d3c',
    from: '0xE81b...f7A2',
    to: '0x4d92...aa10',
    amount: '312.00 USDC',
    status: 'success',
    label: 'Confirmed'
  }, {
    hash: '0x5a7f19d2b8e0c6a4913f5d7e2b9c1a8f4d05a7f1',
    from: '0x2c9D...66Ba',
    to: '0x4d92...aa10',
    amount: '19.99 USDC',
    status: 'destructive',
    label: 'Expired'
  }, {
    hash: '0xc44e0b7f2a9d5e1c8b3067f4a9d2c5e8b1a0c44e',
    from: '0x9F1a...22Ec',
    to: '0x4d92...aa10',
    amount: '75.00 USDC',
    status: 'success',
    label: 'Confirmed'
  }];
  function Payments() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
      title: "Payments",
      description: "Confirmed blockchain transactions for this store."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '20px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 320
      }
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "Search by tx hash or wallet\u2026"
    })), /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Tx hash"), /*#__PURE__*/React.createElement(TableHead, null, "Sender wallet"), /*#__PURE__*/React.createElement(TableHead, null, "Recipient wallet"), /*#__PURE__*/React.createElement(TableHead, null, "Amount"), /*#__PURE__*/React.createElement(TableHead, null, "Status"))), /*#__PURE__*/React.createElement(TableBody, null, PAYMENTS.map(p => /*#__PURE__*/React.createElement(TableRow, {
      key: p.hash
    }, /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--foreground-light)'
      }
    }, p.hash.slice(0, 10), "\u2026", p.hash.slice(-6))), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--foreground-light)'
      }
    }, p.from), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--foreground-light)'
      }
    }, p.to), /*#__PURE__*/React.createElement(TableCell, null, p.amount), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusPill, {
      variant: p.status
    }, p.label))))))));
  }
  window.Payments = Payments;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/outpay/Payments.jsx", error: String((e && e.message) || e) }); }

// ui_kits/outpay/Settings.jsx
try { (() => {
(function () {
  const {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    Input,
    Switch,
    Button
  } = window.OutpayDesignSystem_3f8d0c;
  const {
    PageHeader
  } = window;
  function Settings() {
    const [usdc, setUsdc] = React.useState(true);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
      title: "Settings",
      description: "Store profile, wallet, webhook endpoint, and payment options."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '24px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        maxWidth: 640
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Store profile")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        borderBottom: 'none'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Store name",
      defaultValue: "Acme Coffee Co."
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Store description",
      defaultValue: "Specialty coffee beans & equipment"
    }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Payout wallet"), /*#__PURE__*/React.createElement(CardDescription, null, "Payments go directly to this address \u2014 Outpay never custodies funds.")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        borderBottom: 'none'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Wallet address (Base)",
      defaultValue: "0x4d921f6a8c2e0b7d5f193a4c8e1b6d02aa10"
    }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Webhook endpoint"), /*#__PURE__*/React.createElement(CardDescription, null, "Receives signed checkout.paid events")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        borderBottom: 'none'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Endpoint URL",
      defaultValue: "https://acmecoffee.com/webhooks/outpay"
    }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Payment options")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        borderBottom: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 500
      }
    }, "USDC on Base"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--foreground-lighter)'
      }
    }, "Only supported option in this MVP")), /*#__PURE__*/React.createElement(Switch, {
      checked: usdc,
      onChange: setUsdc
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        opacity: 0.5
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 500
      }
    }, "USDT"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--foreground-lighter)'
      }
    }, "Coming soon")), /*#__PURE__*/React.createElement(Switch, {
      checked: false,
      disabled: true
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary"
    }, "Save changes"))));
  }
  window.Settings = Settings;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/outpay/Settings.jsx", error: String((e && e.message) || e) }); }

// ui_kits/outpay/Shell.jsx
try { (() => {
(function () {
  const NAV = [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'layout-dashboard'
  }, {
    id: 'checkouts',
    label: 'Checkouts',
    icon: 'link'
  }, {
    id: 'payments',
    label: 'Payments',
    icon: 'arrow-left-right'
  }, {
    id: 'developer',
    label: 'Developers',
    icon: 'code'
  }, {
    id: 'settings',
    label: 'Settings',
    icon: 'settings'
  }];
  function DashboardShell({
    active,
    onNavigate,
    storeName = 'Acme Coffee Co.',
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        minHeight: '100vh',
        background: 'var(--background-default)',
        fontFamily: 'var(--font-sans)',
        color: 'var(--foreground-default)'
      }
    }, /*#__PURE__*/React.createElement("aside", {
      style: {
        width: 220,
        flexShrink: 0,
        borderRight: '1px solid var(--border-default)',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 12px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '0 8px',
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 22,
        height: 22,
        borderRadius: 6,
        background: 'var(--color-brand-900)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        fontSize: 15
      }
    }, "Outpay")), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onNavigate(n.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '8px 10px',
        borderRadius: 6,
        border: 'none',
        background: active === n.id ? 'var(--background-selection)' : 'transparent',
        color: active === n.id ? 'var(--foreground-default)' : 'var(--foreground-light)',
        fontSize: 13,
        textAlign: 'left',
        cursor: 'pointer',
        fontFamily: 'inherit'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: `https://unpkg.com/lucide-static@latest/icons/${n.icon}.svg`,
      width: 16,
      height: 16,
      style: {
        opacity: active === n.id ? 0.9 : 0.6
      },
      alt: ""
    }), n.label))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'auto',
        padding: '10px 8px',
        fontSize: 11,
        color: 'var(--foreground-lighter)',
        borderTop: '1px solid var(--border-default)',
        paddingTop: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        marginBottom: 4
      }
    }, "Store"), storeName)), /*#__PURE__*/React.createElement("main", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, children));
  }
  function PageHeader({
    title,
    description,
    action
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '28px 32px 20px',
        borderBottom: '1px solid var(--border-default)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      className: "heading-title",
      style: {
        margin: 0
      }
    }, title), description && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '6px 0 0',
        fontSize: 13,
        color: 'var(--foreground-lighter)'
      }
    }, description)), action);
  }
  window.DashboardShell = DashboardShell;
  window.PageHeader = PageHeader;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/outpay/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/outpay/StoreDirectory.jsx
try { (() => {
(function () {
  const {
    Card,
    CardContent,
    StatusPill,
    Input
  } = window.OutpayDesignSystem_3f8d0c;
  const {
    PageHeader
  } = window;
  const STORES = [{
    name: 'Acme Coffee Co.',
    desc: 'Specialty coffee beans & equipment',
    verified: true
  }, {
    name: 'Northline Apparel',
    desc: 'Minimal streetwear, small-batch drops',
    verified: true
  }, {
    name: 'Loft & Lumen',
    desc: 'Handmade lighting and home goods',
    verified: false
  }, {
    name: 'Basecamp Supply',
    desc: 'Outdoor gear for weekend trips',
    verified: true
  }];
  function StoreDirectory() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: '100vh',
        background: 'var(--background-default)',
        fontFamily: 'var(--font-sans)',
        color: 'var(--foreground-default)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 880,
        margin: '0 auto',
        padding: '48px 24px'
      }
    }, /*#__PURE__*/React.createElement(PageHeader, {
      title: "Store directory",
      description: "Verified ecommerce stores accepting USDC checkout."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '20px 0',
        maxWidth: 340
      }
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "Search stores\u2026"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 16
      }
    }, STORES.map(s => /*#__PURE__*/React.createElement(Card, {
      key: s.name
    }, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        borderBottom: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: 8,
        background: 'var(--background-surface-200)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 500,
        fontSize: 14
      }
    }, s.name), s.verified && /*#__PURE__*/React.createElement(StatusPill, {
      variant: "success"
    }, "Verified")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--foreground-lighter)'
      }
    }, s.desc)))))));
  }
  window.StoreDirectory = StoreDirectory;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/outpay/StoreDirectory.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardDescription = __ds_scope.CardDescription;

__ds_ns.CardContent = __ds_scope.CardContent;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.TableHeader = __ds_scope.TableHeader;

__ds_ns.TableBody = __ds_scope.TableBody;

__ds_ns.TableRow = __ds_scope.TableRow;

__ds_ns.TableHead = __ds_scope.TableHead;

__ds_ns.TableCell = __ds_scope.TableCell;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
