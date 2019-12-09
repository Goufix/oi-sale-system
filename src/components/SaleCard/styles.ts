import { Card } from "react-bootstrap";
import styled from "styled-components";

export const Header = styled(Card.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CollapseHeader = styled(Card.Header)`
  cursor: pointer;
`;
