(function () {
  const { Card, CardHeader, CardTitle, CardDescription, CardContent, Input, Switch, Button } = window.OutpayDesignSystem_3f8d0c;
  const { PageHeader } = window;

  function Settings() {
    const [usdc, setUsdc] = React.useState(true);
    return (
      <div>
        <PageHeader title="Settings" description="Store profile, wallet, webhook endpoint, and payment options." />
        <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 640 }}>
          <Card>
            <CardHeader>
              <CardTitle>Store profile</CardTitle>
            </CardHeader>
            <CardContent style={{ display: 'flex', flexDirection: 'column', gap: 14, borderBottom: 'none' }}>
              <Input label="Store name" defaultValue="Acme Coffee Co." />
              <Input label="Store description" defaultValue="Specialty coffee beans & equipment" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payout wallet</CardTitle>
              <CardDescription>Payments go directly to this address — Outpay never custodies funds.</CardDescription>
            </CardHeader>
            <CardContent style={{ borderBottom: 'none' }}>
              <Input label="Wallet address (Base)" defaultValue="0x4d921f6a8c2e0b7d5f193a4c8e1b6d02aa10" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Webhook endpoint</CardTitle>
              <CardDescription>Receives signed checkout.paid events</CardDescription>
            </CardHeader>
            <CardContent style={{ borderBottom: 'none' }}>
              <Input label="Endpoint URL" defaultValue="https://acmecoffee.com/webhooks/outpay" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment options</CardTitle>
            </CardHeader>
            <CardContent style={{ display: 'flex', flexDirection: 'column', gap: 12, borderBottom: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>USDC on Base</div>
                  <div style={{ fontSize: 12, color: 'var(--foreground-lighter)' }}>Only supported option in this MVP</div>
                </div>
                <Switch checked={usdc} onChange={setUsdc} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: 0.5 }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>USDT</div>
                  <div style={{ fontSize: 12, color: 'var(--foreground-lighter)' }}>Coming soon</div>
                </div>
                <Switch checked={false} disabled />
              </div>
            </CardContent>
          </Card>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="primary">Save changes</Button>
          </div>
        </div>
      </div>
    );
  }

  window.Settings = Settings;
})();
