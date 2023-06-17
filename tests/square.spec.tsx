import { describe, vi  } from "vitest";
import { render, fireEvent } from '@testing-library/react';
import { Square } from "../src/components/Square";
import { TURNS } from "../src/constants";

describe("Square.componente.tsx", () => {
  it("should render the component", () => {
      
    // arrange
    const props = {
      value: TURNS.X,
      position: 0,
      updateSquare: vi.fn()
    };
  
    // act
    const { container } = render(<Square {...props} />);
        
    // assert
    expect(container).toBeInTheDocument();
  });

  it("should render the component with value", () => {
        
    // arrange
    const props = {
      value: TURNS.X,
      position: 0,
      updateSquare: vi.fn()
    };
    
    // act
    const { getByText } = render(<Square {...props} />);
  
    // assert
    expect(getByText("✖")).toBeInTheDocument();
  });

  it("should call updateSquare", () => {
    // arrange
    const props = {
      value: TURNS.X,
      position: 0,
      updateSquare: vi.fn()
    };


    // act
    const { container } = render(<Square {...props} />);
    const wrapper = container.querySelector(".square") as Element;
    fireEvent.click(wrapper);
    
    // assert
    expect(props.updateSquare).toHaveBeenCalled();
  }); 
});