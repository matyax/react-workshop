import Vehicle from "../Vehicle";

test("Creates a Vehicle instance and exposes properties", () => {
  const vehicle = new Vehicle({
    id: 1,
    brand: "Test Brand",
    model: "Test Model",
    price: 1000000,
    year: 2020,
  });

  expect(vehicle).toBeInstanceOf(Vehicle);
  expect(vehicle.id).toBe(1);
  expect(vehicle.brand).toBe("Test Brand");
  expect(vehicle.model).toBe("Test Model");
  expect(vehicle.price).toBe(1000000);
  expect(vehicle.year).toBe(2020);
});
