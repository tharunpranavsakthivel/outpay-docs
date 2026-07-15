Tabs — section switcher (e.g. Checkout: Details / API / Webhooks). Uncontrolled by default (tracks its own active tab) or pass `value`/`onChange` to control it.

```jsx
<Tabs tabs={[{value:'details',label:'Details'},{value:'api',label:'API'}]}>
  {(active) => active === 'details' ? <DetailsPanel/> : <ApiPanel/>}
</Tabs>
```
