import { Turn } from "../constants";

interface SquareProps {
  value: Turn;
  position: number;
  updateSquare: (position: number) => void;
}

export function Square({ value, position, updateSquare }: SquareProps) {
  return (
    <div className="square" onClick={() => updateSquare(position)}>
      <span>{value}</span>
    </div>
  );
}
