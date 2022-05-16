import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Img/logo.png';
import registerbutton from '../../Img/Button.png';

export const NavbarDefault = () => {
  return (
    <div>
      <Navbar bg="transparant" expand="lg">
        <Container>
          <Navbar.Brand href="/"><img src={logo}></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

            </Nav>
            <Nav>
              <Nav.Link href="ourservice">Our Service</Nav.Link>
              <Nav.Link href="whyus">Why Us</Nav.Link>
              <Nav.Link href="testimonial">Testimonial</Nav.Link>
              <Nav.Link href="faq">FAQ</Nav.Link>
              <Navbar.Brand href="/"><img src={registerbutton}></img></Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}
