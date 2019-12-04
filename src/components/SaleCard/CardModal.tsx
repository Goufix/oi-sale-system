import React from "react";
import { Modal, Button, Table } from "react-bootstrap";
import { SheetRow } from "../../@types/sheet";
import { CardModalRow } from "./CardModalRow";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  username: string;
  allSells: SheetRow[];
  goalSells: SheetRow[];
}

export function CardModal(props: Props) {
  const { isOpen, handleClose, username, allSells, goalSells } = props;

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Detalhes da Venda ({username})</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped hover size="sm">
          <thead className="thead-dark">
            <tr>
              <th>Data/Hora</th>
            </tr>
          </thead>
          <thead>
            <th colSpan={1}>Vendas de "Meta"</th>
          </thead>
          <tbody>
            {goalSells.map((sell, index) => (
              <CardModalRow key={index} sell={sell} />
            ))}
          </tbody>
          <thead>
            <th colSpan={1}>Todas as vendas</th>
          </thead>
          <tbody>
            {allSells.map((sell, index) => (
              <CardModalRow key={index} sell={sell} />
            ))}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
