import React from "react";
import { Router } from "@reach/router";
import { Container } from "react-bootstrap";
import { ErrorHandler } from "./components/ErrorHandler";
import { Home } from "./components/Home";
import { NavigationBar } from "./components/NavigationBar";
import { GlobalStyle } from "./styles/global";
import { DecemberChallenge } from "./components/DecemberChallenge";

export function App() {
  return (
    <ErrorHandler>
      <GlobalStyle />
      <NavigationBar />
      <Container>
        <Router>
          <Home path="/" />
          <DecemberChallenge
            path="/challenges/decemberChallenge"
            seller={"Alifer"}
          />
        </Router>
      </Container>
    </ErrorHandler>
  );
}
