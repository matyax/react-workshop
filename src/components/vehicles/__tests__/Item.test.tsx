import Item from "../Item";
import React from "react";
import Vehicle from "models/Vehicle";
import { render } from "@testing-library/react";

const vehicle = new Vehicle({
  id: 1,
  brand: "Test Brand",
  model: "Test Model",
  price: 100000,
  year: 2020,
  description: "Un auto",
});

test("Renders a vehicle item", () => {
  const { getByText, getByTestId } = render(<Item vehicle={vehicle} />);

  expect(getByText(/Test Brand/)).toBeDefined();
  expect(getByText(/Test Model/)).toBeDefined();
  expect(getByTestId("vehicle-image")).toBeInTheDocument();
});
