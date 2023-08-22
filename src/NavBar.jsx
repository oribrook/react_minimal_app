import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          Logicode Pagination
              </Navbar.Brand>
              
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/notes-with-no-paginator">Notes (all)</Nav.Link>
            <Nav.Link as={Link} to="/no-server-infinite-example">Infinite scroll (no server)</Nav.Link>
            <Nav.Link as={Link} to="/infinite-full-example">Infinite (server)</Nav.Link>
            <Nav.Link as={Link} to="/paging-paginator">Page Num (no server)</Nav.Link>
            <Nav.Link as={Link} to="/paging-server">Page Num (server)</Nav.Link>
            <Nav.Link as={Link} to="/another-example">practical-example</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
