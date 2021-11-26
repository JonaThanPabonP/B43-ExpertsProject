import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import UserDropdown from "./UserDropdown";

const ExpertRegister = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Registrate!!</h1>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDropdown">
          <Form.Label>Ubicación</Form.Label>
          <Form.Select>
            <option>Selecciona la ubicación</option>
            <option>Amazonas</option>
            <option>Antioquia</option>
            <option>Atlantico</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCelphone">
          <Form.Label>Celular</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu número de celular"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDNI">
          <Form.Label>DNI</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu número de DNI" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBio">
          <Form.Label>Biografia</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Escribe una pequeña biografia de ti"
            type="text"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicContact">
          <Form.Label>Link de contacto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa el link de contacto de tu preferencia"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicOccupation">
          <Form.Label>Ocupación</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu ocupación" />
        </Form.Group>

        <Container fluid="md" className="align-items-center">
          <Row>
            <Col>
              <Button variant="dark" type="submit">
                Hecho
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default ExpertRegister;
