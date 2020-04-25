import React, { useState, useEffect, SyntheticEvent } from "react";
import Vehicle from "models/Vehicle";
import VehicleItem from "components/vehicles/Item";
import { get as getStockItem } from "services/stock";
import { Form, Button, Spinner } from "react-bootstrap";

const BookVehicle: React.FC<{ match: { params: { id: number } } }> = ({
  match: {
    params: { id },
  },
}) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    telephone: "",
  });
  const [vehicle, setVehicle] = useState<Vehicle | null | undefined>(undefined);

  async function getVehicle(id: number) {
    setVehicle(await getStockItem(id));
  }

  useEffect(() => {
    getVehicle(id);
  }, []);

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    let newData = { ...data, [e.currentTarget.name]: e.currentTarget.value };

    setData(newData);
  };

  if (vehicle === undefined) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  if (vehicle === null) {
    return (
      <div className="vehicle__form">
        <h5>Reservar vehículo</h5>

        <p>Este vehículo no está más disponible :(</p>
      </div>
    );
  }

  return (
    <Form className="vehicle__form">
      <h5>Reservar vehículo {id}</h5>

      <VehicleItem vehicle={vehicle} />

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
