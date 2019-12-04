import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { SheetRow } from '../../@types/sheet';
import { INVALID_SALE_LIST } from '../../data/invalidSaleList';
import { beautifyName } from '../../utils/beautifyName';
import { CardModal } from './CardModal';
import * as S from './styles';

interface Props {
  seller: string;
  sales: SheetRow[];
}

export function SaleCard(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const goal = props.sales.filter(
    (sale) => !INVALID_SALE_LIST.includes(sale.COMBO)
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
        <div>Meta: {goal.length}</div>
      </Card.Body>
    </Card>
  );
}
