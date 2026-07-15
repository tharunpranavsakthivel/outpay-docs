(function () {
  const { Input, StatusPill, Table, TableHeader, TableBody, TableRow, TableHead, TableCell } = window.OutpayDesignSystem_3f8d0c;
  const { PageHeader } = window;

  const PAYMENTS = [
    { hash: '0x8f2a91b4e6d7c3a0f251b8d9e4c6a7f3b91c91d4', from: '0x71C7...976F', to: '0x4d92...aa10', amount: '124.00 USDC', status: 'success', label: 'Confirmed' },
    { hash: '0x1b7e44a9c0e2b6f183d5a7c9e0b4f6a8c2d1e441', from: '0x4A2f...11cD', to: '0x4d92...aa10', amount: '58.50 USDC', status: 'warning', label: 'Confirming' },
    { hash: '0x9d3c02f7a1b5e8c4d09263a7f5b1e9c8d4a09d3c', from: '0xE81b...f7A2', to: '0x4d92...aa10', amount: '312.00 USDC', status: 'success', label: 'Confirmed' },
    { hash: '0x5a7f19d2b8e0c6a4913f5d7e2b9c1a8f4d05a7f1', from: '0x2c9D...66Ba', to: '0x4d92...aa10', amount: '19.99 USDC', status: 'destructive', label: 'Expired' },
    { hash: '0xc44e0b7f2a9d5e1c8b3067f4a9d2c5e8b1a0c44e', from: '0x9F1a...22Ec', to: '0x4d92...aa10', amount: '75.00 USDC', status: 'success', label: 'Confirmed' },
  ];

  function Payments() {
    return (
      <div>
        <PageHeader title="Payments" description="Confirmed blockchain transactions for this store." />
        <div style={{ padding: '20px 32px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ maxWidth: 320 }}>
            <Input placeholder="Search by tx hash or wallet…" />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tx hash</TableHead>
                <TableHead>Sender wallet</TableHead>
                <TableHead>Recipient wallet</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {PAYMENTS.map((p) => (
                <TableRow key={p.hash}>
                  <TableCell style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>
                    <span style={{ color: 'var(--foreground-light)' }}>{p.hash.slice(0, 10)}…{p.hash.slice(-6)}</span>
                  </TableCell>
                  <TableCell style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--foreground-light)' }}>{p.from}</TableCell>
                  <TableCell style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--foreground-light)' }}>{p.to}</TableCell>
                  <TableCell>{p.amount}</TableCell>
                  <TableCell><StatusPill variant={p.status}>{p.label}</StatusPill></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }

  window.Payments = Payments;
})();
