import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

jest.mock("components/vehicles/List", () => () => (
  <div data-testid="vehicle-list" />
));

test("Renders without crashing", () => {
  const { container, getByText, getByTestId } = render(<App />);

  expect(getByText("Autos Online")).toBeInTheDocument();
  expect(getByTestId("vehicle-list")).toBeDefined();

  expect(container).toMatchSnapshot();
});
