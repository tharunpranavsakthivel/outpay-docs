import * as React from 'react';

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {}
export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  hoverable?: boolean;
}

export declare function Table(props: TableProps): JSX.Element;
export declare function TableHeader(props: React.HTMLAttributes<HTMLTableSectionElement>): JSX.Element;
export declare function TableBody(props: React.HTMLAttributes<HTMLTableSectionElement>): JSX.Element;
export declare function TableRow(props: TableRowProps): JSX.Element;
export declare function TableHead(props: React.ThHTMLAttributes<HTMLTableCellElement>): JSX.Element;
export declare function TableCell(props: React.TdHTMLAttributes<HTMLTableCellElement>): JSX.Element;
