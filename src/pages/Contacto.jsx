import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [exito, setExito] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    setError("");
    setExito("");

    if (nombre === "" || email === "" || mensaje === "") {
      setError("Por favor, completa todos los campos.");
      return;
    }

    setExito("¡Mensaje enviado con éxito!");
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <Container
      className="bg-white p-5 rounded shadow-sm"
      style={{ maxWidth: "600px" }}
    >
      <h2 className="text-center mb-4">Contacto</h2>

      <Form onSubmit={manejarEnvio} noValidate>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Tu mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </Form.Group>

        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
        {exito && <p style={{ color: "green", fontSize: "14px" }}>{exito}</p>}

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}
export default Contacto;
