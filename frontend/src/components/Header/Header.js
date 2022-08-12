import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
import { logout } from '../../actions/UserActions';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';


const Header = ({ setSearch }) => {
  const history = useNavigate();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <NavbarBrand>
          <Link to="/">School Notes</Link>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="/mynotes">
              <Link to="/mynotes">My notes</Link>
            </Nav.Link>
            <Nav.Link href="#link"></Nav.Link>
            <NavDropdown title="Iresha" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My profile</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header

