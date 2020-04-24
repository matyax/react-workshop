import React from "react";
import Vehicle from "models/Vehicle";
import { Media, Button } from "react-bootstrap";
import { format as formatPrice } from "helpers/price";

const VehicleItem: React.FC<{ vehicle: Vehicle }> = ({ vehicle }) => (
  <Media as="li" className="vehicle__item">
    <img
      width={120}
      height="auto"
      className="mr-3"
      src={vehicle.image}
      alt={vehicle.model}
      data-testid="vehicle-image"
    />
    <Media.Body>
      <h5>
        {vehicle.brand} {vehicle.model}
      </h5>
      <p>{vehicle.description}</p>
      <p>{formatPrice(vehicle.price)}</p>
      <Button variant="primary">Reservar online</Button>
    </Media.Body>
  </Media>
);

export default VehicleItem;
