(function () {
  const { Button, StatusPill } = window.OutpayDesignSystem_3f8d0c;

  function CustomerCheckout({ onBack }) {
    const [status, setStatus] = React.useState('waiting'); // waiting | detected | confirmed
    const address = '0x8f2a91b4e6d7c3a0f251b8d9e4c6a7f3b91c91d4';

    return (
      <div style={{ minHeight: '100vh', background: 'var(--background-default)', fontFamily: 'var(--font-sans)', color: 'var(--foreground-default)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div style={{ width: 420, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden', background: 'var(--card)' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border-default)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 18, height: 18, borderRadius: 5, background: 'var(--color-brand-900)' }} />
              <span style={{ fontWeight: 600, fontSize: 14 }}>Acme Coffee Co.</span>
            </div>
            {onBack && <button onClick={onBack} style={{ border: 'none', background: 'none', fontSize: 12, color: 'var(--foreground-lighter)', cursor: 'pointer' }}>← back</button>}
          </div>

          <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 12, color: 'var(--foreground-lighter)', marginBottom: 4 }}>Order #4471</div>
              <div style={{ fontSize: 34, fontWeight: 500 }}>124.00 <span style={{ fontSize: 16, color: 'var(--foreground-lighter)' }}>USDC</span></div>
            </div>

            <div style={{
              display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 12, lineHeight: 1.5,
              background: 'color-mix(in oklch, var(--warning) 10%, var(--background))',
              border: '1px solid var(--border-warning)', borderRadius: 8, padding: 12, color: 'var(--foreground-default)',
            }}>
              <img src="https://unpkg.com/lucide-static@latest/icons/alert-triangle.svg" width={15} height={15} style={{ flexShrink: 0, marginTop: 1 }} alt="" />
              <div>
                <strong>Base network only.</strong> Send exactly <strong>124.00 USDC</strong> on Base. Sending any other asset, amount, or network will result in permanent loss of funds.
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: '8px 0' }}>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=ethereum:${address}@8453?amount=124.00`}
                width={160} height={160}
                alt="Payment QR code"
                style={{ border: '1px solid var(--border-default)', borderRadius: 8 }}
              />
              <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--foreground-light)', wordBreak: 'break-all', textAlign: 'center' }}>
                {address}
              </div>
            </div>

            <Button variant="primary" block onClick={() => setStatus('detected')} disabled={status !== 'waiting'}>
              {status === 'waiting' ? 'Pay with wallet' : 'Waiting for confirmation…'}
            </Button>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 12, padding: '10px 12px', background: 'var(--background-surface-200)', borderRadius: 8 }}>
              <span style={{ color: 'var(--foreground-lighter)' }}>Payment status</span>
              {status === 'waiting' && <StatusPill variant="default">Awaiting payment</StatusPill>}
              {status === 'detected' && <StatusPill variant="warning">Detected — confirming</StatusPill>}
              {status === 'confirmed' && <StatusPill variant="success">Paid</StatusPill>}
            </div>

            {status === 'detected' && (
              <button onClick={() => setStatus('confirmed')} style={{ fontSize: 11, color: 'var(--foreground-lighter)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                (demo) simulate confirmation
              </button>
            )}

            <div style={{ fontSize: 11, color: 'var(--foreground-lighter)', textAlign: 'center', lineHeight: 1.5 }}>
              Non-custodial: this payment goes directly from your wallet to the merchant's wallet. Outpay never holds your funds.
            </div>
          </div>
        </div>
      </div>
    );
  }

  window.CustomerCheckout = CustomerCheckout;
})();
