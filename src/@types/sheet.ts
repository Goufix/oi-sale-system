export type Fields =
  | "Carimbo de data/hora"
  | "DATA"
  | "DDD"
  | "CLIENTE"
  | "CPF"
  | "CONTATO"
  | "NUMERO_GERADO"
  | "PORTABILIDADE"
  | "VENDEDOR"
  | "COMBO"
  | "PRODUTO_VENDIDO"
  | "DATA_INTALACAO"
  | "NUMERO_PORTADO";

export type SheetRow = {
  [key in Fields]: string;
};
