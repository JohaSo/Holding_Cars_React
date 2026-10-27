import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const manejarLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("sesionActiva", "true");
    navigate("/");
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <div className="bg-white p-4 rounded shadow-sm">
        <h3 className="mb-3 text-center">Iniciar Sesión</h3>
        <Form onSubmit={manejarLogin}>
          <Form.Group className="mb-2">
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="email" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" required />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 mb-2">
            Ingresar
          </Button>
          <Button
            variant="secondary"
            type="button"
            className="w-100"
            onClick={manejarLogin}
          >
            Entrar como Admin
          </Button>
        </Form>
      </div>
    </Container>
  );
}
export default Login;
