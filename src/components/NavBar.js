import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import Logo from './Logo'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'

const NavBar = () => {
  return (
    <div style={{ marginBottom: 10 }}>
      <Navbar bg="light" expand="lg" style={{ padding: 0 }}>
        <Container>
          <Navbar.Brand as={NavLink} activeClassName="active" to="/">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={NavLink}
                activeClassName="active"
                to="/category/anillos"
              >
                Anillos
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                activeClassName="active"
                to="/category/collares"
              >
                Collares
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                activeClassName="active"
                to="/category/relojes"
              >
                Relojes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartWidget />
      </Navbar>
    </div>
  )
}

export default NavBar
