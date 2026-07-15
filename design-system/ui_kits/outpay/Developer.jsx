(function () {
  const { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, StatusPill } = window.OutpayDesignSystem_3f8d0c;
  const { PageHeader } = window;

  const CURL = `curl -X POST https://api.outpay.dev/v1/checkouts \\
  -H "Authorization: Bearer OUTPAY_SECRET_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": "124.00",
    "currency": "USDC",
    "network": "base",
    "label": "Order #4471"
  }'`;

  const WEBHOOK_PAYLOAD = `{
  "event": "checkout.paid",
  "checkout_id": "ch_8f2a91b4",
  "amount": "124.00",
  "currency": "USDC",
  "network": "base",
  "tx_hash": "0x8f2a91b4e6d7c3a0f251b8d9e4c6a7f3b91c91d4",
  "confirmed_at": "2026-07-05T18:42:11Z"
}`;

  function CodeBlock({ children }) {
    return (
      <pre style={{
        margin: 0, padding: 16, borderRadius: 8, background: 'var(--background-surface-200)',
        border: '1px solid var(--border-muted)', fontFamily: 'var(--font-mono)', fontSize: 12,
        lineHeight: 1.6, color: 'var(--foreground-default)', overflowX: 'auto',
      }}>{children}</pre>
    );
  }

  function Developer() {
    return (
      <div>
        <PageHeader title="Developers" description="API keys, checkout creation API, and signed webhooks." />
        <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 760 }}>
          <Card>
            <CardHeader style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <CardTitle>API keys</CardTitle>
                <CardDescription>Used to authenticate checkout-creation requests</CardDescription>
              </div>
              <Button variant="outline" size="tiny">Hide key</Button>
            </CardHeader>
            <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: 'none' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>OUTPAY_LIV••••••••</div>
              <StatusPill variant="success">Active</StatusPill>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Create a checkout</CardTitle>
              <CardDescription>POST /v1/checkouts</CardDescription>
            </CardHeader>
            <CardContent style={{ borderBottom: 'none' }}>
              <CodeBlock>{CURL}</CodeBlock>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Webhook payload</CardTitle>
              <CardDescription>Sent to your endpoint on checkout.paid, signed with HMAC-SHA256 (X-Outpay-Signature header)</CardDescription>
            </CardHeader>
            <CardContent style={{ borderBottom: 'none' }}>
              <CodeBlock>{WEBHOOK_PAYLOAD}</CodeBlock>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  window.Developer = Developer;
})();
