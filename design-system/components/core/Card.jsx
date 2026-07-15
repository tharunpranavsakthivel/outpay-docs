import React from 'react';

/**
 * Card + CardHeader/CardTitle/CardDescription/CardContent/CardFooter.
 * Extracted from Supabase's shadcn/ui/card.tsx: bordered panel with a
 * hairline shadow (not a floating drop-shadow), mono uppercase title,
 * 16px horizontal padding (--card-padding-x), borders between sections.
 */

export function Card({ children, style, ...rest }) {
  return (
    <div
      style={{
        overflow: 'hidden',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-default)',
        background: 'var(--background-surface-100)',
        color: 'var(--foreground-default)',
        boxShadow: 'var(--shadow-xs)',
        fontFamily: 'var(--font-sans)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, style, ...rest }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        padding: '16px var(--card-padding-x)',
        borderBottom: '1px solid var(--border-default)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, style, ...rest }) {
  return (
    <h3
      style={{
        fontSize: 12,
        fontFamily: 'var(--font-mono)',
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
        margin: 0,
        color: 'var(--foreground-default)',
        fontWeight: 500,
        ...style,
      }}
      {...rest}
    >
      {children}
    </h3>
  );
}

export function CardDescription({ children, style, ...rest }) {
  return (
    <p style={{ fontSize: 13, color: 'var(--foreground-lighter)', margin: 0, ...style }} {...rest}>
      {children}
    </p>
  );
}

export function CardContent({ children, style, ...rest }) {
  return (
    <div
      style={{ padding: '16px var(--card-padding-x)', borderBottom: '1px solid var(--border-default)', ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardFooter({ children, style, ...rest }) {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', padding: '16px var(--card-padding-x)', ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
