import { Navbar, Nav } from 'react-bootstrap';
import React from 'react';

function navbar(props) {
  return (
    <Navbar bg="success" expand="lg">
      <Navbar.Brand href="#home">Employee DataBase</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;
