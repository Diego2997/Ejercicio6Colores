import { Button, Form, Card } from "react-bootstrap";

const FormularioColores = () => {
  return (
    <Form className="container mt-5">
      <Card>
        <h2 className="py-2">Administrar Colores</h2>
        <Card.Body className="bg-card">
        <Form.Group className="mb-3 d-flex" controlId="color">
        <div className="color "></div>
        <Form.Control type="email" className="ms-4" placeholder="Ingresa un color. Por ej: blue" />
      </Form.Group>
        </Card.Body>
        <Card.Footer className="ms-auto">
            <Button variant="secondary" className="ms-auto shadow" type="submit">
        Guardar
      </Button>
      </Card.Footer>
      </Card>
    </Form>
  );
};

export default FormularioColores;
