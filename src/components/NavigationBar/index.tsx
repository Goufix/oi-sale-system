import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "@reach/router";

export function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand href="#home">OI System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link to="/challenges/decemberChallenge">
              <Nav.Link>Gráficos de Desempenho</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
