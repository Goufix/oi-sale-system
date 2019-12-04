import React from "react";
import { Alert } from "react-bootstrap";
import styled from "styled-components";

const ErrorMessage = styled.pre`
  border: solid 1px #491217;
  color: #491217;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 0.25rem;
  display: table;
  margin-bottom: 0;
`;
export class ErrorHandler extends React.Component {
  state = {
    hasError: false,
    message: ""
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, message: error.message };
  }

  // componentDidCatch(error, errorInfo) {
  //   console.log(error, errorInfo);
  // }

  render() {
    if (this.state.hasError) {
      return (
        <Alert variant="danger" className="m-5">
          <Alert.Heading>Whoops! Aconteceu algo errado.</Alert.Heading>
          <p>
            Algum erro aconteceu ao tentar renderizar essa página.
            <br />
            Tente{" "}
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, no-script-url */}
            <Alert.Link href="javascript:window.location.reload(true);">
              atualizar a página
            </Alert.Link>
            . Se o erro persistir, contate o desenvolvedor da página (Álifer).
          </p>
          <hr />
          <p className="mb-0">
            Mensagem de erro para debug:
            <ErrorMessage>{this.state.message}</ErrorMessage>
          </p>
        </Alert>
      );
    }

    return this.props.children;
  }
}
