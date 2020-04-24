import Vehicle from "models/Vehicle";

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

export async function get() {
  const vehicles = data.map((data) => new Vehicle(data));

  return Promise.resolve(vehicles);
}
