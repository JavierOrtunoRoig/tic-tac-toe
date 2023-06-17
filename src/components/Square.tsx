import { Turn } from "../constants";

interface SquareProps {
  value: Turn;
  position: number;
  updateSquare: (position: number) => void;
}

export function Square({ value, position, updateSquare }: SquareProps) {

  const handleClick = () => {
    updateSquare(position);
  };

  return (
    <div className="square" onClick={handleClick}>
      <span>{value}</span>
    </div>
  );
}
