import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewsItem from "./NewsItem.jsx";

it("renders the NewsItem component correctly", () => {
  const listItem = {
      title: "a",
      date: "b",
      imageId: "c",
      content: "d"
  }  
  const { container } = render(<NewsItem listItem={listItem}/>);
  expect(container).toMatchSnapshot();
});