interface VehicleData {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
}

class Vehicle {
  readonly id: number;
  readonly brand: string;
  readonly model: string;
  readonly year: number;
  readonly price: number;

  constructor({ id, brand, model, year, price }: VehicleData) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.price = price;
  }
}

export default Vehicle;
