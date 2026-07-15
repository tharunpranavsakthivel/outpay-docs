import React from 'react';

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
    border: '1px solid var(--border-strong)',
  },
  success: {
    background: 'color-mix(in oklch, var(--color-brand-900) 10%, transparent)',
    color: 'var(--color-brand-900)',
    border: '1px solid var(--border-brand)',
  },
  warning: {
    background: 'color-mix(in oklch, var(--warning) 10%, transparent)',
    color: 'var(--warning)',
    border: '1px solid var(--border-warning)',
  },
  destructive: {
    background: 'color-mix(in oklch, var(--destructive) 10%, transparent)',
    color: 'var(--destructive)',
    border: '1px solid var(--border-destructive)',
  },
  secondary: {
    background: 'var(--secondary)',
    color: 'var(--secondary-foreground)',
    border: '1px solid transparent',
  },
};

export function StatusPill({ variant = 'default', children, style, ...rest }) {
  const v = VARIANTS[variant] || VARIANTS.default;
  return (
    <div
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
