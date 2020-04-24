import Item from "./Item";
import React, { useEffect, useState } from "react";
import Vehicle from "models/Vehicle";
import { get as getStock } from "services/stock";

const VehicleList: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  async function fetchVehicles() {
    const vehicles = await getStock();

    setVehicles(vehicles);
  }

  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <ul className="list-unstyled">
      {vehicles.map((vehicle) => (
        <Item vehicle={vehicle} key={vehicle.id} />
      ))}
    </ul>
  );
};

export default VehicleList;
