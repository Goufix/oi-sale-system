import React from "react";
import { Col, Row } from "react-bootstrap";
import { SALE_LIST } from "../../data/saleList";
import { useTableTop } from "../../hooks/useTableTop";
import { Loading } from "../Loading";
import { SaleCard } from "../SaleCard";
import { SheetRow } from "../../@types/sheet";

const key: string = process.env.REACT_APP_SHEET_KEY!;

export function Home() {
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
      {sellers &&
        sellers.map((seller, i) => (
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
