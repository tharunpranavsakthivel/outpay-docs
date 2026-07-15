Switch — boolean toggle (e.g. "Accept USDT" in Settings > Payment options, though USDT is out of scope for MVP so it should render disabled/off).

```jsx
<Switch checked={acceptsUsdc} onChange={setAcceptsUsdc} />
```
