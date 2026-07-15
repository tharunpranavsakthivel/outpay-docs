(function () {
  const { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Input } = window.OutpayDesignSystem_3f8d0c;
  const { PageHeader } = window;

  function CreateCheckout({ onGenerate }) {
    const [amount, setAmount] = React.useState('124.00');
    const [label, setLabel] = React.useState('Order #4471');
    const [generated, setGenerated] = React.useState(false);

    return (
      <div>
        <PageHeader title="Create checkout" description="Generate a USDC payment link for a customer order." />
        <div style={{ padding: '24px 32px', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24, maxWidth: 920 }}>
          <Card>
            <CardHeader>
              <CardTitle>Checkout details</CardTitle>
              <CardDescription>USDC on Base — this MVP does not support other assets or networks.</CardDescription>
            </CardHeader>
            <CardContent style={{ display: 'flex', flexDirection: 'column', gap: 16, borderBottom: 'none' }}>
              <Input label="Order label" value={label} onChange={(e) => setLabel(e.target.value)} />
              <Input label="Amount (USDC)" value={amount} onChange={(e) => setAmount(e.target.value)} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 6 }}>Network</div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px',
                  borderRadius: 6, border: '1px solid var(--border-brand)',
                  background: 'color-mix(in oklch, var(--color-brand-900) 6%, transparent)', fontSize: 13,
                }}>
                  <img src="https://unpkg.com/lucide-static@latest/icons/badge-check.svg" width={15} height={15} alt="" />
                  Base — fixed for this MVP, cannot be changed
                </div>
              </div>
            </CardContent>
            <CardContent style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="primary" onClick={() => setGenerated(true)}>Generate payment link</Button>
            </CardContent>
          </Card>

          <Card style={{ height: 'fit-content' }}>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent style={{ borderBottom: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ fontSize: 13, color: 'var(--foreground-lighter)' }}>{label || 'Order label'}</div>
              <div style={{ fontSize: 28, fontWeight: 500 }}>{amount || '0.00'} <span style={{ fontSize: 14, color: 'var(--foreground-lighter)' }}>USDC</span></div>
              {generated ? (
                <React.Fragment>
                  <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--foreground-light)', wordBreak: 'break-all', background: 'var(--background-surface-200)', padding: 8, borderRadius: 6 }}>
                    outpay.link/c/8f2a91b4e6d7
                  </div>
                  <Button variant="outline" size="tiny" onClick={onGenerate}>Open customer view →</Button>
                </React.Fragment>
              ) : (
                <div style={{ fontSize: 12, color: 'var(--foreground-lighter)' }}>Generate a link to preview the customer checkout page.</div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  window.CreateCheckout = CreateCheckout;
})();
