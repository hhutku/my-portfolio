import React from 'react'
import './style.css'
import { Navbar, Nav } from 'react-bootstrap';





const MyNav = () => {
  return (
<Navbar className="navbar navbar-expand-lg navbar-dark bg-dark" expand="lg">
  <Navbar.Brand href="/"> <a className="navbar-brand" href="/"><img src="https://img.icons8.com/color/48/000000/react-native.png" alt="react logo" className="icon"/></a></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="/about">About</Nav.Link>
    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
    <Nav.Link href="/contact">Contact</Nav.Link>
     <Nav.Link href="/resume">Resume</Nav.Link>
     
      
     
 
    </Nav>

  </Navbar.Collapse>
</Navbar>
  )
}

export default MyNav
