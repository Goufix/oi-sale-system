import React from "react";
import {} from "react-bootstrap";
import { SheetRow } from "../../@types/sheet";

interface Props {
  sell: SheetRow;
}

export function CardModalRow({ sell }: Props) {
  return (
    <tr>
      <td>{sell["Carimbo de data/hora"]}</td>
    </tr>
  );
}
