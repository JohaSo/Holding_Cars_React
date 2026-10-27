import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Registro() {
  const navigate = useNavigate();

  const manejarRegistro = (e) => {
    e.preventDefault();
    alert("Cuenta creada con éxito. Ahora puedes iniciar sesión.");
    navigate("/login");
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <div className="bg-white p-4 rounded shadow-sm">
        <h3 className="mb-3 text-center">Crear Cuenta</h3>
        <Form onSubmit={manejarRegistro}>
          <Form.Group className="mb-2">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" required />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Guardar
          </Button>
        </Form>
      </div>
    </Container>
  );
}
export default Registro;
