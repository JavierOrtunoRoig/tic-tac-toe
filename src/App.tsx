import { useState, useEffect } from 'react';
import { Square } from "./components/Square";
import { TURNS, Turn } from './constants';
import confetti from "canvas-confetti";
import { Information } from './components/Information';
import { checkWinner } from './helpers';

function App() {

  const [board, setBoard] = useState<Turn[]>(Array(9).fill(null));
  const [turn, setTurn] = useState<Turn>('✖');

  const winner = checkWinner(board) ? true : false;
  const oppositeTurn = turn === TURNS.X ? TURNS.O : TURNS.X;

  useEffect(() => {
    const winner = checkWinner(board);
    if (winner) {
      confetti();
    }
  }, [board]);

  const updateSquare = (position: number) => {
    if (board[position] || checkWinner(board)) return;
    const newBoard = [...board];
    newBoard[position] = turn;
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
    setBoard(newBoard);
  };

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <section className="board">
        { board.map((cell, index) => <Square key={index} value={cell} position={index} updateSquare={updateSquare}/> ) }
      </section>
      { winner
        ? <Information title='Winner' value={oppositeTurn} winner={true}/>
        : <Information title='Next turn' value={turn}/>
      }
    </>
  );
}

export default App;
