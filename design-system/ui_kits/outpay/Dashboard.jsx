(function () {
  const { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, StatusPill, Table, TableHeader, TableBody, TableRow, TableHead, TableCell } = window.OutpayDesignSystem_3f8d0c;
  const { PageHeader } = window;

  const METRICS = [
    { label: 'Payment volume (30d)', value: '$48,204.12', sub: '312 checkouts' },
    { label: 'Paid checkouts', value: '287', sub: '92% completion' },
    { label: 'Pending checkouts', value: '9', sub: 'awaiting confirmation' },
    { label: 'Webhook success rate', value: '99.4%', sub: '3 retried, 0 dropped' },
  ];

  const RECENT = [
    { id: 'ch_8f2a91', customer: '0x71C7...976F', amount: '124.00 USDC', status: 'success', label: 'Paid' },
    { id: 'ch_1b7e44', customer: '0x4A2f...11cD', amount: '58.50 USDC', status: 'warning', label: 'Pending' },
    { id: 'ch_9d3c02', customer: '0xE81b...f7A2', amount: '312.00 USDC', status: 'success', label: 'Paid' },
    { id: 'ch_5a7f19', customer: '0x2c9D...66Ba', amount: '19.99 USDC', status: 'destructive', label: 'Expired' },
  ];

  function Dashboard({ onNavigate }) {
    return (
      <div>
        <PageHeader
          title="Dashboard"
          description="Payment volume and checkout status across your store."
          action={<Button variant="primary" onClick={() => onNavigate('checkouts')}>Create checkout</Button>}
        />
        <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {METRICS.map((m) => (
              <Card key={m.label}>
                <CardContent style={{ borderBottom: 'none' }}>
                  <div className="heading-meta" style={{ color: 'var(--foreground-lighter)', marginBottom: 8 }}>{m.label}</div>
                  <div style={{ fontSize: 24, fontWeight: 500 }}>{m.value}</div>
                  <div style={{ fontSize: 12, color: 'var(--foreground-lighter)', marginTop: 4 }}>{m.sub}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent checkouts</CardTitle>
              <CardDescription>Latest payment activity across your store</CardDescription>
            </CardHeader>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Checkout</TableHead>
                  <TableHead>Customer wallet</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {RECENT.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>{r.id}</TableCell>
                    <TableCell style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--foreground-light)' }}>{r.customer}</TableCell>
                    <TableCell>{r.amount}</TableCell>
                    <TableCell><StatusPill variant={r.status}>{r.label}</StatusPill></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    );
  }

  window.Dashboard = Dashboard;
})();
