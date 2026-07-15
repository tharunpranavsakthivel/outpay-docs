import React from 'react';

/**
 * Switch — extracted from Supabase's shadcn/ui/switch.tsx: pill track,
 * brand-green when checked, thumb slides with a shadow.
 */
const SIZES = {
  small: { w: 28, h: 16, thumb: 12 },
  medium: { w: 34, h: 20, thumb: 16 },
  large: { w: 44, h: 24, thumb: 18 },
};

export function Switch({ checked, onChange, size = 'medium', disabled = false }) {
  const s = SIZES[size] || SIZES.medium;
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      style={{
        width: s.w,
        height: s.h,
        borderRadius: 999,
        border: '1px solid transparent',
        background: checked ? 'var(--color-brand-900)' : 'var(--background-control)',
        position: 'relative',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'background 0.15s ease',
        padding: 0,
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: (s.h - s.thumb) / 2 - 1,
          left: checked ? s.w - s.thumb - 3 : 1,
          width: s.thumb,
          height: s.thumb,
          borderRadius: '50%',
          background: checked ? '#fff' : 'var(--foreground-lighter)',
          boxShadow: 'var(--shadow-sm)',
          transition: 'left 0.15s ease',
        }}
      />
    </button>
  );
}
