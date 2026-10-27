import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MiNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="mb-4 shadow-sm">
      <Container>
        {/* AQUÍ INTEGRAMOS EL LOGO Y EL NOMBRE */}
        <Navbar.Brand as={Link} to="/img/holding_cars_logo.jpg" className="holding_cars_logo">
          <img
            src="/img/holding_cars_logo.jpg"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
            alt="Holding Cars Logo"
          />
          <span className="fw-bold">Holding Cars</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/ofertas">Ofertas</Nav.Link>
            <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-primary" className="me-2" as={Link} to="/login">Iniciar Sesión</Button>
            <Button variant="primary" as={Link} to="/registro">Crear Cuenta</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MiNavbar;