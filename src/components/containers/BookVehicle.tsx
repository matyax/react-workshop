import React, { useState, SyntheticEvent } from "react";
import { Form, Button } from "react-bootstrap";

const BookVehicle: React.FC = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    telephone: "",
  });

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    let newData = { ...data, [e.currentTarget.name]: e.currentTarget.value };

    setData(newData);
  };

  return (
    <Form className="vehicle__form">
      <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Ingrese su nombre completo"
          onChange={handleChange}
          value={data.name}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>E-mail</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Ingrese su email"
          onChange={handleChange}
          value={data.email}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          type="text"
          name="telephone"
          placeholder="Ingrese su teléfono"
          onChange={handleChange}
          value={data.telephone}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Reservar!
      </Button>
    </Form>
  );
};

export default BookVehicle;
