import React from "react";
import { Col, Row } from "react-bootstrap";
import { SheetRow } from "../../@types/sheet";
import { SALE_LIST } from "../../data/saleList";
import { useTableTop } from "../../hooks/useTableTop";
import { Loading } from "../Loading";
import { SaleCard } from "../SaleCard";
import { RouteComponentProps } from "@reach/router";

const key = "178R4sLiU9oqHCy5E6_rtfhoMBvXhTrIAKfpEOTtdqXU";

export function Home(_: RouteComponentProps) {
  const sheetData = useTableTop<SheetRow>(key);

  for (const data of sheetData) {
    if (!SALE_LIST.includes(data.COMBO)) {
      // TODO(*): Renderizar utilizando UIErrorContext
      throw new Error(`Há uma inconsistência no combo do CPF: ${data.CPF}`);
    }
  }

  if (sheetData.length === 0) {
    return (
      <Loading message="Carregando... Aproveite pra vender enquanto isso. ;)" />
    );
  }

  const sellers = [...new Set(sheetData.map(value => value.VENDEDOR))];

  return (
    <Row>
      {sellers.map((seller, i) => (
        <Col key={i}>
          <SaleCard
            key={i}
            seller={seller}
            sales={sheetData.filter(sale => sale.VENDEDOR === seller)}
          />
        </Col>
      ))}
    </Row>
  );
}
