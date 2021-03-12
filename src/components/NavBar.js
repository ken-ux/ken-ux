import React from "react"
import { Link } from "gatsby"
function NavBar(props) {
  const navBarStyle = {
    padding: 48,
    fontFamily: "-apple-system, Roboto, sans-serif, serif"
  }
  return (
    <navbar style={navBarStyle}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
    </navbar>
  )
}
export default NavBar