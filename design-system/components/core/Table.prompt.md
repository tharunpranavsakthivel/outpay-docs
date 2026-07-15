Table — data grid for payments, checkouts, API keys, webhook logs. Column headers are small mono uppercase (`heading-meta`); rows highlight on hover.

```jsx
<Table>
  <TableHeader><TableRow><TableHead>Tx Hash</TableHead><TableHead>Amount</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
  <TableBody>
    <TableRow><TableCell>0x8f2a...c91d</TableCell><TableCell>124.00 USDC</TableCell><TableCell><StatusPill variant="success">Paid</StatusPill></TableCell></TableRow>
  </TableBody>
</Table>
```
