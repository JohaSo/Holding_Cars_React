import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const manejarLogin = (e) => {
    e.preventDefault();
    setError("");

    if (email === "" || password === "") {
      setError("Por favor, completa todos los campos.");
      return;
    }
    if (!email.includes("@")) {
      setError("Por favor, ingresa un correo válido (debe contener @).");
      return;
    }
    if (password.length < 4) {
      setError("La contraseña debe tener al menos 4 caracteres.");
      return;
    }

    localStorage.setItem("sesionActiva", "true");
    navigate("/");
    window.location.reload(); // MAGIA: Recarga para actualizar el Navbar
  };

  const entrarAdmin = () => {
    localStorage.setItem("sesionActiva", "true");
    navigate("/");
    window.location.reload(); // MAGIA: Recarga para actualizar el Navbar
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <div className="bg-white p-4 rounded shadow-sm">
        <h3 className="mb-3 text-center">Iniciar Sesión</h3>
        <Form onSubmit={manejarLogin} noValidate>
          <Form.Group className="mb-2">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

          <Button variant="primary" type="submit" className="w-100 mb-2">
            Ingresar
          </Button>
          <Button
            variant="secondary"
            type="button"
            className="w-100"
            onClick={entrarAdmin}
          >
            Entrar como Admin
          </Button>
        </Form>
      </div>
    </Container>
  );
}
export default Login;
