import React from "react";
import { Spinner, LoadingAlert } from "./styles";
import { AlertProps } from "react-bootstrap";

interface Props {
  variant?: AlertProps["variant"];
  message?: string;
}

export function Loading(props: Props) {
  return (
    <LoadingAlert variant={props.variant || "info"}>
      <Spinner />
      {props.message || "Carregando..."}
    </LoadingAlert>
  );
}
