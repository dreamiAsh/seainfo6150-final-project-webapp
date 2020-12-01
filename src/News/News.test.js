import React from "react";
import { render, fireEvent } from "@testing-library/react";
import News from "./News.jsx";

it("renders the News component correctly", () => {
  const { container } = render(<News />);
  expect(container).toMatchSnapshot();
});