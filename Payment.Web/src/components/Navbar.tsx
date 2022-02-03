import React = require('react');
import { Container, Nav, Navbar as BSNavbar } from 'react-bootstrap';

interface NavbarProps {}

export const Navbar: React.FunctionComponent<NavbarProps> = () => {
  return (
    <BSNavbar bg="dark" variant="dark">
      <Container>
        <BSNavbar.Brand href="#">Payment Calculator</BSNavbar.Brand>
      </Container>
    </BSNavbar>
  );
};
