import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AboutUs from "./AboutUs.jsx";

it("renders the AboutUs component correctly", () => {
  const { container } = render(<AboutUs />);
  expect(container).toMatchSnapshot();
});