import React from "react";
import Vehicle from "models/Vehicle";
import { Media } from "react-bootstrap";

const VehicleItem: React.FC<{ vehicle: Vehicle }> = ({ vehicle }) => (
  <Media as="li">
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
      <p>Una descripción.</p>
    </Media.Body>
  </Media>
);

export default VehicleItem;
