import React from "react";
import { Card, ProgressBar } from "react-bootstrap";
import { SheetRow } from "../../@types/sheet";

interface Props {
  seller: string;
  sales: SheetRow[];
}

export function ChallengeCard(props: Props) {
  return (
    <>
      <Card>
        <Card.Header>{props.seller}</Card.Header>
        <Card.Body>
          Você vendeu {props.sales.length}
          <ProgressBar now={props.sales.length / 120}></ProgressBar>
        </Card.Body>
      </Card>
    </>
  );
}
