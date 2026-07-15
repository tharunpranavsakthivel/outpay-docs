StatusPill — small uppercase pill for payment/webhook/order status. Use `success` for Paid/Delivered, `warning` for Pending/Retrying, `destructive` for Failed/Expired, `default` for neutral states (Draft).

```jsx
<StatusPill variant="success">Paid</StatusPill>
<StatusPill variant="warning">Pending</StatusPill>
<StatusPill variant="destructive">Failed</StatusPill>
```
