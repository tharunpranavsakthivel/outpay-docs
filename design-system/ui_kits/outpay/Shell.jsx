(function () {
  const NAV = [
    { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
    { id: 'checkouts', label: 'Checkouts', icon: 'link' },
    { id: 'payments', label: 'Payments', icon: 'arrow-left-right' },
    { id: 'developer', label: 'Developers', icon: 'code' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ];

  function DashboardShell({ active, onNavigate, storeName = 'Acme Coffee Co.', children }) {
    return (
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--background-default)', fontFamily: 'var(--font-sans)', color: 'var(--foreground-default)' }}>
        <aside style={{ width: 220, flexShrink: 0, borderRight: '1px solid var(--border-default)', display: 'flex', flexDirection: 'column', padding: '20px 12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 8px', marginBottom: 28 }}>
            <div style={{ width: 22, height: 22, borderRadius: 6, background: 'var(--color-brand-900)' }} />
            <span style={{ fontWeight: 600, fontSize: 15 }}>Outpay</span>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => onNavigate(n.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '8px 10px', borderRadius: 6, border: 'none',
                  background: active === n.id ? 'var(--background-selection)' : 'transparent',
                  color: active === n.id ? 'var(--foreground-default)' : 'var(--foreground-light)',
                  fontSize: 13, textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit',
                }}
              >
                <img src={`https://unpkg.com/lucide-static@latest/icons/${n.icon}.svg`} width={16} height={16} style={{ opacity: active === n.id ? 0.9 : 0.6 }} alt="" />
                {n.label}
              </button>
            ))}
          </nav>
          <div style={{ marginTop: 'auto', padding: '10px 8px', fontSize: 11, color: 'var(--foreground-lighter)', borderTop: '1px solid var(--border-default)', paddingTop: 14 }}>
            <div style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Store</div>
            {storeName}
          </div>
        </aside>
        <main style={{ flex: 1, minWidth: 0 }}>{children}</main>
      </div>
    );
  }

  function PageHeader({ title, description, action }) {
    return (
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '28px 32px 20px', borderBottom: '1px solid var(--border-default)' }}>
        <div>
          <h1 className="heading-title" style={{ margin: 0 }}>{title}</h1>
          {description && <p style={{ margin: '6px 0 0', fontSize: 13, color: 'var(--foreground-lighter)' }}>{description}</p>}
        </div>
        {action}
      </div>
    );
  }

  window.DashboardShell = DashboardShell;
  window.PageHeader = PageHeader;
})();
