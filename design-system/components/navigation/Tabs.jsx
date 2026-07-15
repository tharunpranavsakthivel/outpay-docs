import React from 'react';

/**
 * Tabs — extracted from Supabase's shadcn/ui/tabs.tsx: bottom-border list,
 * active tab gets a 2px foreground underline, inactive tabs are lighter.
 */
export function Tabs({ value, onChange, tabs, children }) {
  const [internal, setInternal] = React.useState(tabs?.[0]?.value);
  const active = value ?? internal;
  const setActive = onChange ?? setInternal;
  return (
    <div style={{ fontFamily: 'var(--font-sans)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, borderBottom: '1px solid var(--border-default)' }}>
        {tabs.map((t) => (
          <button
            key={t.value}
            onClick={() => setActive(t.value)}
            style={{
              background: 'none',
              border: 'none',
              borderBottom: `2px solid ${active === t.value ? 'var(--foreground-default)' : 'transparent'}`,
              color: active === t.value ? 'var(--foreground-default)' : 'var(--foreground-lighter)',
              padding: '8px 2px',
              fontSize: 13,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div style={{ marginTop: 16 }}>{children(active)}</div>
    </div>
  );
}
