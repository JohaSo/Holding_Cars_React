import { Card, Button } from 'react-bootstrap';

function VehiculoCard({ vehiculo, alHacerClic }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }} className="shadow-sm">
      <Card.Img variant="top" src={vehiculo.imagen} />
      <Card.Body>
        <Card.Title>{vehiculo.marca} {vehiculo.modelo}</Card.Title>
        <Card.Text>Patente: {vehiculo.patente} <br />Precio: ${vehiculo.precio.toLocaleString('es-CL')}</Card.Text>
        <Button variant="dark" className="w-100" onClick={() => alHacerClic(vehiculo)}>Seleccionar Auto</Button>
      </Card.Body>
    </Card>
  );
}
export default VehiculoCard;