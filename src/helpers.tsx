import { Turn, WINNER_COMBOS } from "./constants";

export const checkWinner = (board: Turn[]): Turn => {
  for (let i = 0; i < WINNER_COMBOS.length; i++) {
    const [a,b,c] = WINNER_COMBOS[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;  
};