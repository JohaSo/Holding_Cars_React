import { Container, Row, Col } from "react-bootstrap";
import VehiculoCard from "../components/VehiculoCard";
import { vehiculos } from "../data/vehiculos";

function Ofertas() {
  const ofertas = vehiculos.filter((v) => v.categoria === "Oferta");
  return (
    <Container>
      <h2 className="mb-4">Las mejores Ofertas</h2>
      <Row>
        {ofertas.map((auto) => (
          <Col md={4} key={auto.id}>
            <VehiculoCard vehiculo={auto} alHacerClic={() => {}} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Ofertas;
