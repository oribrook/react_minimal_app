import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { appContext } from "./App";
import { Button } from "react-bootstrap";

const NavBar = () => {
  
  const { userLogged, userName, setUserLogged } = useContext(appContext);

  const nav = useNavigate()
  return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-between">
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
            {userLogged && <Nav.Link as={Link} to="/infinite-full-example">
              Notes
            </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>

      <Container dir="rtl">
        {!userLogged && (
          <Nav dir="rtl">
            <Nav.Link as={Link} to="/login">
              התחבר
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              הרשם
            </Nav.Link>
          </Nav>
        )}
        {userLogged && (
          <Nav dir="rtl">
            <Nav.Link
              as={Button}
              onClick={() => {
                localStorage.removeItem("token");
                setUserLogged(false);
                nav("/login");
              }}
            >
              שלום {userName} התנתק
            </Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
