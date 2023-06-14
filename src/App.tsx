import { useState, useEffect } from 'react';
import { Square } from "./components/Square";
import { TURNS, WINNER_COMBOS } from './constants';
import confetti from "canvas-confetti";

function App() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('✖');

  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      setBoard(Array(9).fill(null));
      setTurn(TURNS.X);
      confetti();
      alert(`Winner is ${winner}`);
    }
  }, [board]);

  const updateSquare = (position: number) => {
    if (board[position] || checkWinner()) return;
    const newBoard = [...board];
    newBoard[position] = turn;
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
    setBoard(newBoard);
  }

  const checkWinner = () => {
    for (let i = 0; i < WINNER_COMBOS.length; i++) {
      const [a,b,c] = WINNER_COMBOS[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;  
  }

  return (
    <>
     <h1>Tic Tac Toe</h1>
     <section className="board">
      { board.map((cell, index) => <Square key={index} value={cell} position={index} updateSquare={updateSquare}/> ) }
     </section>
    </>
  )
}

export default App
