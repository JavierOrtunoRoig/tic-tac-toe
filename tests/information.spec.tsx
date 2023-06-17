import { describe } from "vitest";
import { render, screen } from '@testing-library/react';
import { Information } from "../src/components/Information";

describe("Information.componente.tsx", () => {
  it("should render the component", () => {

    // arrange
    const props = {
      title: "sample",
      value: "✖"
    };

    // act
    const { container } = render(<Information {...props} />);
      
    // assert
    expect(container).toBeInTheDocument();
  });

  it("should render the component with winner", () => {
      
    // arrange
    const props = {
      title: "Winner",
      value: "✖",
      winner: true
    };
  
    // act
    const { container } = render(<Information {...props} />);
    const wrapper = container.querySelector(".next-turn");

    // assert
    expect(wrapper).toHaveClass("winner");
  });

  it("should render title right", () => {
        
    // arrange
    const props = {
      title: "sample",
      value: "✖"
    };
    
    // act
    render(<Information {...props} />);

          
    // assert
    expect(screen.getByText(props.title)).toBeInTheDocument();
  });
});