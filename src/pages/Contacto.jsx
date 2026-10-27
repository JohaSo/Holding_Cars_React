import { Container, Form, Button } from "react-bootstrap";

function Contacto() {
  return (
    <Container
      className="bg-white p-5 rounded shadow-sm"
      style={{ maxWidth: "600px" }}
    >
      <h2 className="text-center mb-4">Contacto</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Tu nombre" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Tu correo" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}
export default Contacto;
