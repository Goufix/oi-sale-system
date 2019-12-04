import React from 'react';
import { Container } from 'react-bootstrap';
import { ErrorHandler } from './components/ErrorHandler';
import { Home } from './components/Home';
import { NavigationBar } from './components/NavigationBar';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <ErrorHandler>
      <GlobalStyle />
      <NavigationBar />
      <Container>
        <Home />
      </Container>
    </ErrorHandler>
  );
}
