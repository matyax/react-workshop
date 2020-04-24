import Item from "./Item";
import React, { useEffect, useState } from "react";
import Vehicle from "models/Vehicle";
import { get as getStock } from "services/stock";
import { Spinner } from "react-bootstrap";

const VehicleList: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[] | null>(null);

  async function fetchVehicles() {
    const vehicles = await getStock();

    setVehicles(vehicles);
  }

  useEffect(() => {
    fetchVehicles();
  }, []);

  if (!vehicles) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  if (!vehicles.length) {
    return <div>Estamos sin stock. Contactanos al 0800-666-123</div>;
  }

  return (
    <ul className="list-unstyled" data-testid="vehicle-list">
      {vehicles.map((vehicle) => (
        <Item vehicle={vehicle} key={vehicle.id} />
      ))}
    </ul>
  );
};

export default VehicleList;
