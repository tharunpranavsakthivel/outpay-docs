(function () {
  const { Button } = window.OutpayDesignSystem_3f8d0c;

  function Landing({ onGetStarted, onViewDirectory }) {
    return (
      <div style={{ background: 'var(--background-default)', color: 'var(--foreground-default)', fontFamily: 'var(--font-sans)', minHeight: '100vh' }}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 40px', borderBottom: '1px solid var(--border-default)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 22, height: 22, borderRadius: 6, background: 'var(--color-brand-900)' }} />
            <span style={{ fontWeight: 600, fontSize: 15 }}>Outpay</span>
          </div>
          <div style={{ display: 'flex', gap: 24, fontSize: 13, color: 'var(--foreground-light)', alignItems: 'center' }}>
            <a onClick={onViewDirectory} style={{ cursor: 'pointer' }}>Store directory</a>
            <span>Developers</span>
            <Button variant="primary" size="tiny" onClick={onGetStarted}>Get started</Button>
          </div>
        </header>

        <section style={{ textAlign: 'center', padding: '100px 24px 80px', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)',
            width: 700, height: 400, borderRadius: '50%',
            background: 'radial-gradient(circle, color-mix(in oklch, var(--color-brand-900) 18%, transparent) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative' }}>
            <div className="heading-meta" style={{ color: 'var(--color-brand-900)', marginBottom: 16 }}>USDC checkout for ecommerce</div>
            <h1 style={{ fontSize: 48, fontWeight: 500, letterSpacing: '-0.02em', margin: '0 0 20px', maxWidth: 720, marginInline: 'auto', lineHeight: 1.15 }}>
              Accept USDC. Get paid directly to your wallet.
            </h1>
            <p style={{ fontSize: 16, color: 'var(--foreground-light)', maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.6 }}>
              Outpay is a non-custodial checkout for stablecoin payments on Base. No middleman holds your funds — customers pay, you receive it directly.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <Button variant="primary" size="medium" onClick={onGetStarted}>Get started</Button>
              <Button variant="outline" size="medium">View docs</Button>
            </div>
          </div>
        </section>

        <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px 100px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { icon: 'wallet', title: 'Wallet-to-wallet', body: "Funds move directly from your customer's wallet to yours. Outpay never takes custody." },
            { icon: 'badge-check', title: 'Verified on-chain', body: 'Every payment is confirmed against the Base blockchain before an order is marked paid.' },
            { icon: 'webhook', title: 'Signed webhooks', body: 'Get a signed checkout.paid webhook the moment a payment confirms — build your own flow.' },
          ].map((f) => (
            <div key={f.title} style={{ textAlign: 'left' }}>
              <img src={`https://unpkg.com/lucide-static@latest/icons/${f.icon}.svg`} width={22} height={22} style={{ marginBottom: 12 }} alt="" />
              <div style={{ fontWeight: 500, fontSize: 15, marginBottom: 6 }}>{f.title}</div>
              <div style={{ fontSize: 13, color: 'var(--foreground-lighter)', lineHeight: 1.6 }}>{f.body}</div>
            </div>
          ))}
        </section>
      </div>
    );
  }

  window.Landing = Landing;
})();
