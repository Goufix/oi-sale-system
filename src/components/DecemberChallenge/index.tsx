import React from "react";
import { Container } from "react-bootstrap";
import { RouteComponentProps } from "@reach/router";
import { SheetRow } from "../../@types/sheet";
import { ChallengeCard } from "./ChallengeCard";
import { useTableTop } from "../../hooks/useTableTop";
import { Loading } from "../Loading";

const key = "178R4sLiU9oqHCy5E6_rtfhoMBvXhTrIAKfpEOTtdqXU";

interface Props extends RouteComponentProps {
  seller: string;
}

export function DecemberChallenge(props: Props) {
  const sales = useTableTop<SheetRow>(key);

  if (sales.length === 0) {
    return (
      <Loading message="Carregando... Aproveite pra vender enquanto isso. ;)" />
    );
  }

  return (
    <Container>
      <h1>DESAFIO DO MÊS DE DEZEMBRO!</h1>
      <ChallengeCard seller={props.seller} sales={sales} />
    </Container>
  );
}
