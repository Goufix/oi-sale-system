import React from 'react';
import { Modal, Button, Card, Accordion } from 'react-bootstrap';
import { SheetRow } from '../../@types/sheet';
import { CardModalTable } from './CardModalTable';
import * as S from './styles';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  username: string;
  allSells: SheetRow[];
  goalSells: SheetRow[];
}

enum Sells {
  ALL_SELLS = 'ALL_SELLS',
  GOAL_SELLS = 'GOAL_SELLS'
}

export function CardModal(props: Props) {
  const { isOpen, handleClose, username, allSells, goalSells } = props;

  return (
    <Modal show={isOpen} onHide={handleClose} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>Detalhes da Venda ({username})</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Accordion>
          <Card>
            <Accordion.Toggle as={S.CollapseHeader} eventKey={Sells.GOAL_SELLS}>
              Vendas da Meta
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={Sells.GOAL_SELLS}>
              <Card.Body>
                <CardModalTable sells={goalSells} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={S.CollapseHeader} eventKey={Sells.ALL_SELLS}>
              Todas as Vendas
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={Sells.ALL_SELLS}>
              <Card.Body>
                <CardModalTable sells={allSells} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
