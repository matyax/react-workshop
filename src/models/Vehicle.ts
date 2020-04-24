export interface VehicleData {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  description: string;
}

class Vehicle {
  readonly id: number;
  readonly brand: string;
  readonly model: string;
  readonly year: number;
  readonly price: number;
  readonly description: string;

  constructor({ id, brand, model, year, price, description }: VehicleData) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.price = price;
    this.description = description;
  }

  get image() {
    return `img/${this.brand.toLowerCase()}/${this.model.toLowerCase()}.jpg`;
  }
}

export default Vehicle;
