import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import './MainNavigation.module.css'
function MainNavigation() {
  return (
    <>
      <br />
      <Navbar bg="primary" variant="dark" expand="lg" className="mb-3 fixed-top" >
        <Container>
          <Navbar.Brand href="/signin">Login</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/register">Sign up</Nav.Link>
              <Nav.Link href="/Home">Home</Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavigation;
