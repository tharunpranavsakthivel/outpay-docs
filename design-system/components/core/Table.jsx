import React from 'react';

/**
 * Table + TableHeader/TableBody/TableRow/TableHead/TableCell.
 * Extracted from Supabase's shadcn/ui/table.tsx: mono-uppercase heading-meta
 * column labels, row hover highlight, hairline row borders.
 */

export function Table({ children, style, ...rest }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, fontFamily: 'var(--font-sans)', ...style }} {...rest}>
      {children}
    </table>
  );
}
export function TableHeader({ children, ...rest }) {
  return <thead {...rest}>{children}</thead>;
}
export function TableBody({ children, ...rest }) {
  return <tbody {...rest}>{children}</tbody>;
}
export function TableRow({ children, style, hoverable = true, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <tr
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderBottom: '1px solid var(--border-default)',
        background: hoverable && hover ? 'var(--background-surface-200)' : 'transparent',
        transition: 'background 0.1s ease',
        ...style,
      }}
      {...rest}
    >
      {children}
    </tr>
  );
}
export function TableHead({ children, style, ...rest }) {
  return (
    <th
      style={{
        height: 40,
        padding: '0 16px',
        textAlign: 'left',
        verticalAlign: 'middle',
        whiteSpace: 'nowrap',
        fontSize: 11,
        fontFamily: 'var(--font-mono)',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        fontWeight: 500,
        color: 'var(--foreground-lighter)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </th>
  );
}
export function TableCell({ children, style, ...rest }) {
  return (
    <td style={{ padding: 16, verticalAlign: 'middle', color: 'var(--foreground-default)', ...style }} {...rest}>
      {children}
    </td>
  );
}
