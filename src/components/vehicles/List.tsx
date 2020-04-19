import Item from "./Item";
import React from "react";
import Vehicle from "models/Vehicle";

const VehicleList: React.FC = () => {
  const data = [
    {
      id: 1,
      brand: "Ford",
      model: "Mondeo",
      year: 2020,
      price: 3000000,
    },
    {
      id: 2,
      brand: "Volkswagen",
      model: "T-Cross",
      year: 2019,
      price: 2500000,
    },
  ];

  const vehicles = data.map((data) => new Vehicle(data));

  return (
    <ul className="list-unstyled">
      {vehicles.map((vehicle) => (
        <Item vehicle={vehicle} key={vehicle.id} />
      ))}
    </ul>
  );
};

export default VehicleList;
