import React from "react";
import { Table } from "react-bootstrap";
import { SheetRow } from "../../@types/sheet";

interface Props {
  sells: SheetRow[];
}

export function CardModalTable({ sells }: Props) {
  return (
    <div>
      <Table striped hover size="sm">
        <thead>
          <tr>
            <th>Data</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Combo</th>
            <th>Produtos</th>
          </tr>
        </thead>
        <tbody>
          {sells.map((sell, index) => (
            <tr key={index}>
              <td>{sell.DATA}</td>
              <td>{sell.CLIENTE}</td>
              <td>{sell.CPF}</td>
              <td>{sell.COMBO}</td>
              <td>{sell.PRODUTO_VENDIDO}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
