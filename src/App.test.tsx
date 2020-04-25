import App from "./App";
import React from "react";
import { render } from "@testing-library/react";

jest.mock("components/containers/VehicleList", () => () => (
  <div data-testid="vehicle-list" />
));

test("Renders without crashing", () => {
  const { container, getByText, getByTestId } = render(<App />);

  expect(getByText("Autos Online")).toBeInTheDocument();
  expect(getByTestId("vehicle-list")).toBeDefined();

  expect(container).toMatchSnapshot();
});
