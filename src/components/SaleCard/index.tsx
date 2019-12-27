import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { SheetRow } from "../../@types/sheet";
import { INVALID_SALE_LIST } from "../../data/invalidSaleList";
import { beautifyName } from "../../utils/beautifyName";
import { CardModal } from "./CardModal";
import * as S from "./styles";

interface Props {
  seller: string;
  sales: SheetRow[];
}

export function SaleCard(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const goal = props.sales.filter(
    sale => !INVALID_SALE_LIST.includes(sale.COMBO)
  );
  const seller = beautifyName(props.seller);

  return (
    <Card>
      <CardModal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        username={seller}
        allSells={props.sales}
        goalSells={goal}
      />
      <S.Header>
        <strong>{seller}</strong>
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={() => setIsOpen(true)}
        >
          Detalhes
        </Button>
      </S.Header>
      <Card.Body>
        <div>Vendeu: {props.sales.length}</div>
        <div>Meta: 25 Pós / 10 Fibras</div>
        <div>
          Meta atingida pós:{" "}
          {goal
            .filter(
              v =>
                v.PRODUTO_VENDIDO.includes("PÓS") ||
                v.PRODUTO_VENDIDO.includes("DEPENDENTE") ||
                v.PRODUTO_VENDIDO.includes("DEPENDENTES")
            )
            .reduce((pv, value) => {
              let accumulator = pv;
              if (value.PRODUTO_VENDIDO.includes("PÓS")) {
                accumulator++;
              }
              if (value.PRODUTO_VENDIDO.includes("DEPENDENTE")) {
                accumulator++;
              }
              if (value.PRODUTO_VENDIDO.includes("2 DEPENDENTES")) {
                accumulator += 2;
              }
              if (value.PRODUTO_VENDIDO.includes("3 DEPENDENTES")) {
                accumulator += 3;
              }
              if (value.PRODUTO_VENDIDO.includes("4 DEPENDENTES")) {
                accumulator += 4;
              }
              return accumulator;
            }, -1)}
	</div>
	<div>Meta fibra: {goal.filter(value => value.PRODUTO_VENDIDO.includes("FIBRA") || value.PRODUTO_VENDIDO.includes("MIGRAÇÃO COBRE > FIBRA")).length}</div>
      </Card.Body>
    </Card>
  );
}
