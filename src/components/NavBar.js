import React from "react";
import { Link } from "gatsby";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';

function NavBar(props) {
  return (
    <Navbar expand="lg">
        <Navbar.Brand href="/">Placeholder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
export default NavBar