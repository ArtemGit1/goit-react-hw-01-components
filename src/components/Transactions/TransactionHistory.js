import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  border: 1px solid #ccc;
  padding: 20px;
  width: 300px;
  margin: 0 auto;
  background-color: #f4f4f4;
  text-align: center;
`;

const TableHeader = styled.thead`
  background-color: #333;
  color: #fff;
`;

const TableHeaderCell = styled.th`
  padding: 10px;
`;

const TableRow = styled.tr`
  background-color: #fff;
`;

const TableCell = styled.td`
  padding: 10px;
`;

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Currency</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <tbody>
        {items.map(item => (
          <TableRow key={item.id}>
            <TableCell>{item.type}</TableCell>
            <TableCell>{item.amount}</TableCell>
            <TableCell>{item.currency}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default TransactionHistory;
