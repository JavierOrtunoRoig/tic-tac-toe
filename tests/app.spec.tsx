import { describe } from "vitest";
import { fireEvent, render } from '@testing-library/react';
import App from "../src/App";

describe("app.component", () => {
  it("should render the component", () => {
    // arrange
    // act
    const { container } = render(<App />);
    // assert
    expect(container).toBeInTheDocument();
  });

  it("should trigger 'updateSquare' when click a square", () => {
    const { container } = render(<App />);
    const square = container.querySelector(".square") as Element;
    fireEvent.click(square);
  });

});