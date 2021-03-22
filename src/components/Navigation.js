import React from "react";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation(props) {
  return (
    <Navbar expand="lg">
        <Navbar.Brand href="/">KN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <NavDropdown title="Projects" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Project 2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export function Footer(props) {
  const footerStyles = {
    position: "relative",
    backgroundColor: "black",
    left: 0,
    bottom: 0,
    width: "100%",
    padding: "30px",
    color: "white",
    textAlign: "center",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    fontSize: "12px"
  }
  
  return (
    <footer style={footerStyles}>
      <div>© 2021 Built by Kenny Nguyen</div>
    </footer>
  )
}