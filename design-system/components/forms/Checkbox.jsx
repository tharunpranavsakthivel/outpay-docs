import React from 'react';

/**
 * Checkbox — extracted from Supabase's shadcn/ui/checkbox.tsx: 16x16,
 * rounded-sm, filled with foreground color + inverted checkmark when checked.
 */
export function Checkbox({ checked, onChange, disabled = false }) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      style={{
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
        padding: 0,
      }}
    >
      {checked && (
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--background-default)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </button>
  );
}
