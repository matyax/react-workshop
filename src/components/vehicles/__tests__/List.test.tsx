import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import List from "../List";
import React from "react";
import { render, waitForElement } from "@testing-library/react";

const mock = new MockAdapter(axios);

const response = [
  {
    id: 1,
    brand: "Ford",
    model: "Mondeo",
    year: 2020,
    price: 3000000,
    description:
      "La unión perfecta entre tecnología, sofisticación, rendimiento y eficiencia, diseño innovador e ingeniería de precisión, el Mondeo está creado para inspirar.",
  },
];

beforeEach(() => {
  mock.onGet("/api/v1/stock").reply(200, { data: response });
});

test("Renders a vehicle list", async () => {
  const { container, getByTestId, getAllByTestId } = render(<List />);

  await waitForElement(() => getByTestId("vehicle-list"));

  expect(container).toMatchSnapshot();

  expect(getAllByTestId("vehicle-item")).toHaveLength(1);
});
