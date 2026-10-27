import { Container, Row, Col, Image, Card } from "react-bootstrap";

function Nosotros() {
  return (
    <Container className="mb-5">
      <div className="bg-white p-5 rounded shadow-sm text-center mb-4">
        <h2 className="fw-bold mb-3" style={{ color: "#1e3a8a" }}>
          ¿Quiénes Somos?
        </h2>
        <p
          className="text-muted"
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          En Holding Cars, nos especializamos en brindar soluciones de lavado,
          cuidado y traslado de vehículos a empresas y flotas corporativas.
          Ofrecemos un servicio integral y a domicilio, garantizando comodidad,
          eficiencia y un mantenimiento de alta calidad.
        </p>
      </div>

      <Row className="mb-4 text-center">
        <Col md={6}>
          <div className="bg-white p-4 rounded shadow-sm h-100">
            <h4 className="fw-bold" style={{ color: "#1e3a8a" }}>
              Nuestra Misión
            </h4>
            <p className="text-muted mt-3">
              Brindar soluciones de movilidad flexibles y seguras, garantizando
              que cada entrega y retiro de vehículo esté respaldado por actas
              digitales claras y precisas.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="bg-white p-4 rounded shadow-sm h-100">
            <h4 className="fw-bold" style={{ color: "#1e3a8a" }}>
              Nuestra Visión
            </h4>
            <p className="text-muted mt-3">
              Ser la empresa líder en traslado de vehículos, reconocida por
              innovar en la seguridad implementando actas digitales y proteger
              la confianza de clientes y choferes.
            </p>
          </div>
        </Col>
      </Row>

      <div className="bg-light p-5 rounded shadow-sm text-center">
        <h3 className="fw-bold mb-4">Desarrolladores del Proyecto</h3>
        <p className="text-muted mb-5">Ingeniería en Informática - Duoc UC</p>
        <Row className="justify-content-center">
          <Col md={4} sm={6} className="mb-4">
            <Card className="border-0 shadow-sm h-100 py-3">
              <div className="d-flex justify-content-center mb-3">
                <Image
                  src="/img/img1.jpg"
                  roundedCircle
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <Card.Body>
                <Card.Title className="fw-bold">Johanna Vegas</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Desarrollo FullStack
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6} className="mb-4">
            <Card className="border-0 shadow-sm h-100 py-3">
              <div className="d-flex justify-content-center mb-3">
                <Image
                  src="/img/img3.jpg"
                  roundedCircle
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <Card.Body>
                <Card.Title className="fw-bold">Andrea Mascareño</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Desarrollo FullStack
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6} className="mb-4">
            <Card className="border-0 shadow-sm h-100 py-3">
              <div className="d-flex justify-content-center mb-3">
                <Image
                  src="/img/img2.jpg"
                  roundedCircle
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <Card.Body>
                <Card.Title className="fw-bold">Diego Pino</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Desarrollo FullStack
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
export default Nosotros;
