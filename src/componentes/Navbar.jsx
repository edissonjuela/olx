import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

export const Barra = () => {
  return (
    <>
      <div className="w-100 ">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/home">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/registro">Registrarme</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/mapa">Ver ubicacion en mapa</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/login">Cerrar Sesion</Nav.Link>
              </Nav>
            
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div> <hr />
    </>
  );
};
