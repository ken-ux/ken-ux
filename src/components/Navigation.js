import React from "react";
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation(props) {
  return (
    <Navbar expand="lg">
        <Navbar.Brand href="/">Kenny Nguyen</Navbar.Brand>
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