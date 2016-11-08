import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'

const Navbar = () => (
  <Nav bsStyle="pills">
    <NavItem href="/">Home</NavItem>
    <NavItem href="/about">About</NavItem>
    <NavItem href="/contact">Contact</NavItem>
  </Nav>
)

export default Navbar
