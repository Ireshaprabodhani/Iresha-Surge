import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';

const header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
          <Container>
              <NavbarBrand href='/'>School Notes</NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='m-auto'>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="#home">My notes</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Iresha" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My profile</NavDropdown.Item>
              
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default header

