import React from 'react';

/**
 * Input — text field. Extracted from Supabase's shadcn/ui/input.tsx:
 * subtle translucent fill (foreground at 2.6% alpha), control border,
 * 2px focus ring offset by 2px. `size="small"` (34px) is Supabase's default.
 */
const HEIGHTS = { tiny: 26, small: 34, medium: 38, large: 42 };

export function Input({ size = 'small', label, hint, error, style, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const field = (
    <input
      onFocus={(e) => { setFocused(true); rest.onFocus?.(e); }}
      onBlur={(e) => { setFocused(false); rest.onBlur?.(e); }}
      style={{
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
        ...style,
      }}
      {...rest}
    />
  );
  if (!label && !hint && !error) return field;
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-sans)' }}>
      {label && <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--foreground-default)' }}>{label}</span>}
      {field}
      {(hint || error) && (
        <span style={{ fontSize: 12, color: error ? 'var(--destructive)' : 'var(--foreground-lighter)' }}>
          {error || hint}
        </span>
      )}
    </label>
  );
}
