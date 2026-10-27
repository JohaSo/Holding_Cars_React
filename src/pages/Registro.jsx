import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Registro() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const manejarRegistro = (e) => {
    e.preventDefault();
    setError("");

    if (nombre === "" || correo === "" || password === "") {
      setError("Por favor, completa todos los campos.");
      return;
    }
    if (!correo.includes("@")) {
      setError("Por favor, ingresa un correo válido (debe contener @).");
      return;
    }
    if (password.length < 4) {
      setError("La contraseña debe tener al menos 4 caracteres.");
      return;
    }

    alert("Cuenta creada con éxito. Ahora puedes iniciar sesión.");
    navigate("/login");
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <div className="bg-white p-4 rounded shadow-sm">
        <h3 className="mb-3 text-center">Crear Cuenta</h3>
        <Form onSubmit={manejarRegistro} noValidate>
          <Form.Group className="mb-2">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
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

          <Button variant="primary" type="submit" className="w-100">
            Guardar
          </Button>
        </Form>
      </div>
    </Container>
  );
}
export default Registro;
