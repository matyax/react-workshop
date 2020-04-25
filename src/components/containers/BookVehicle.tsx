import React, { useState, useEffect, SyntheticEvent } from "react";
import Vehicle from "models/Vehicle";
import VehicleItem from "components/vehicles/Item";
import { book } from "services/booking";
import { get as getStockItem } from "services/stock";
import { Form, Button, Spinner } from "react-bootstrap";
import { Redirect } from "react-router-dom";

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
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  async function getVehicle(id: number) {
    setVehicle(await getStockItem(id));
  }

  useEffect(() => {
    getVehicle(id);
  }, [id]);

  if (success) {
    return <Redirect to="/felicitaciones" />;
  }

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

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    let newData = { ...data, [e.currentTarget.name]: e.currentTarget.value };

    setData(newData);
  };

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitting(true);

    const result = await book({
      ...data,
      vehicle: `${vehicle.brand} ${vehicle.model}`,
      id: vehicle.id,
    });

    setSubmitting(false);

    if (result === true) {
      setSuccess(true);

      return;
    }

    alert("Error: por favor reintente más tarde.");
  };

  return (
    <Form className="vehicle__form" onSubmit={handleSubmit}>
      <h3>Reservar vehículo {id}</h3>

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

      <Button variant="primary" type="submit" disabled={submitting}>
        Reservar!
      </Button>
    </Form>
  );
};

export default BookVehicle;
