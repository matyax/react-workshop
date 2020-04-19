import React from "react";
import Vehicle from "models/Vehicle";
import { Media } from "react-bootstrap";

const VehicleItem: React.FC<{ vehicle: Vehicle }> = ({ vehicle }) => (
  <Media as="li">
    <img
      width={120}
      height={120}
      className="mr-3"
      src="holder.js/64x64"
      alt={vehicle.model}
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
