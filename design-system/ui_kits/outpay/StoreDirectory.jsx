(function () {
  const { Card, CardContent, StatusPill, Input } = window.OutpayDesignSystem_3f8d0c;
  const { PageHeader } = window;

  const STORES = [
    { name: 'Acme Coffee Co.', desc: 'Specialty coffee beans & equipment', verified: true },
    { name: 'Northline Apparel', desc: 'Minimal streetwear, small-batch drops', verified: true },
    { name: 'Loft & Lumen', desc: 'Handmade lighting and home goods', verified: false },
    { name: 'Basecamp Supply', desc: 'Outdoor gear for weekend trips', verified: true },
  ];

  function StoreDirectory() {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--background-default)', fontFamily: 'var(--font-sans)', color: 'var(--foreground-default)' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '48px 24px' }}>
          <PageHeader title="Store directory" description="Verified ecommerce stores accepting USDC checkout." />
          <div style={{ padding: '20px 0', maxWidth: 340 }}>
            <Input placeholder="Search stores…" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {STORES.map((s) => (
              <Card key={s.name}>
                <CardContent style={{ borderBottom: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--background-surface-200)' }} />
                    <div style={{ fontWeight: 500, fontSize: 14 }}>{s.name}</div>
                    {s.verified && <StatusPill variant="success">Verified</StatusPill>}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--foreground-lighter)' }}>{s.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  window.StoreDirectory = StoreDirectory;
})();
