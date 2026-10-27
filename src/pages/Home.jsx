import { Container, Row, Col, Carousel, Alert } from "react-bootstrap";
import { useState } from "react";
import VehiculoCard from "../components/VehiculoCard";
import { vehiculos } from "../data/vehiculos";

function Home() {
  const [autoSeleccionado, setAutoSeleccionado] = useState(null);

  return (
    <Container>
      {autoSeleccionado && (
        <Alert variant="success" className="text-center shadow-sm">
          ¡Has seleccionado el {autoSeleccionado.marca}{" "}
          {autoSeleccionado.modelo}!
        </Alert>
      )}

      <div className="mb-5 shadow-sm rounded overflow-hidden">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/carretera.png"
              alt="Banner 1"
              style={{ height: "350px", objectFit: "cover" }}
            />
            <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-2">
              <h3>Los mejores traslados de vehículos para tu empresa</h3>
              <p>traslados corporativo con actas digitales.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/flota de autos.png"
              alt="Banner 2"
              style={{ height: "350px", objectFit: "cover" }}
            />
            <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-2">
              <h3>Flota de alta gama</h3>
              <p>Seguridad y confianza en cada traslado.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <h2 className="text-center mb-4 fw-bold text-dark">
        Catálogo de Vehículos
      </h2>
      <Row className="justify-content-center">
        {vehiculos.map((auto) => (
          <Col
            md={4}
            sm={6}
            key={auto.id}
            className="d-flex justify-content-center mb-4"
          >
            <VehiculoCard vehiculo={auto} alHacerClic={setAutoSeleccionado} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Home;
