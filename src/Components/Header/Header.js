import React from 'react';
import { Container, Nav, } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom';
import './Header.css'
const activeClass= {
    borderBottom: '3px solid seagreen', 
    color: '#28B463', 
    fontWeight: 'bold', 
    textDecoration: 'none'
}
const linkStyle = {
    textDecoration: 'none',
    fontSize: '1.5rem', 
    color: 'black'
}

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand style={{fontSize:'35px', color: '#28B463', fontWeight:'bold'}} href="#home">DevSchool</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link  href="#home">
            <NavLink style={linkStyle} to="/home" activeStyle={activeClass}>
                   Home
            </NavLink>
        </Nav.Link>
        <Nav.Link href="#about">
            <NavLink  style={linkStyle} to="/about" activeStyle={activeClass}>
                   About
            </NavLink>
        </Nav.Link>
        <Nav.Link href="#services">
            <NavLink  style={linkStyle} to="/services" activeStyle={activeClass}>
                   Services
            </NavLink>
        </Nav.Link>
        <Nav.Link href="#contact">
            <NavLink  style={linkStyle} to="/contact" activeStyle={activeClass}>
                   Contact
            </NavLink>
        </Nav.Link>
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;