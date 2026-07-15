import React from 'react';

/**
 * Button — primary interactive element. Variants and sizing extracted
 * verbatim from Supabase's packages/ui/src/components/Button/Button.tsx
 * (class-variance-authority variants), translated to inline styles.
 */

const SIZES = {
  tiny: { fontSize: 'var(--text-xs)', padding: '4px 10px', height: 26, gap: 6 },
  small: { fontSize: 13, padding: '8px 12px', height: 34, gap: 8 },
  medium: { fontSize: 13, padding: '8px 16px', height: 38, gap: 8 },
  large: { fontSize: 'var(--text-base)', padding: '8px 16px', height: 42, gap: 8 },
};

const VARIANTS = {
  primary: {
    background: 'var(--color-brand-400)',
    color: 'var(--foreground-default)',
    border: '1px solid color-mix(in oklch, var(--color-brand-500) 75%, transparent)',
  },
  default: {
    background: 'var(--background-alternative-default)',
    color: 'var(--foreground-default)',
    border: '1px solid var(--border-strong)',
  },
  secondary: {
    background: 'var(--foreground-default)',
    color: 'var(--background-default)',
    border: '1px solid var(--foreground-light)',
  },
  outline: {
    background: 'transparent',
    color: 'var(--foreground-default)',
    border: '1px solid var(--border-strong)',
  },
  dashed: {
    background: 'transparent',
    color: 'var(--foreground-default)',
    border: '1px dashed var(--border-strong)',
  },
  text: {
    background: 'transparent',
    color: 'var(--foreground-default)',
    border: '1px solid transparent',
  },
  danger: {
    background: 'var(--color-red-300)',
    color: 'var(--foreground-default)',
    border: '1px solid var(--border-destructive)',
  },
  warning: {
    background: 'var(--color-amber-300)',
    color: 'var(--foreground-default)',
    border: '1px solid var(--border-warning)',
  },
};

export function Button({
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
    warning: 'var(--color-amber-400)',
  }[variant];

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {icon}
      {children}
      {iconRight}
    </button>
  );
}
