import React, { useState } from 'react'
import Square from './Square'
import './Board.css';

const Board = () => {

  const [squares, setSquares] = useState (Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState (true);

  const calculateWinner = (squares) => {
    const lines =[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for (let index = 0; index < lines.length; index++) {
      const [a,b,c] = lines[index];

      if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
        return squares[a];
      }
  
    }
    return null;

  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'This Game Winer is :   ' + winner;
  } else {
    status = `Let's play TicTacToe,      Next Player: ${xIsNext ? 'X' : 'O'}`;
  }

  const handleClick = (i) => {
    const newSquares = squares.slice();

    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }

    newSquares [i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  const renderSquare = (i) => {
        return <Square value = {squares[i]} 
          onClick={() => handleClick(i)} />;
    }



  return (
      <div>
        <div className='status'> {status} </div>
        
        <div className='board-row'> 
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className='board-row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className='board-row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>

        <div className='game-info'>info</div>

        <div className='adv'><a href='https://smartstore.naver.com/a-xmas?NaPm=ct%3Dlw900ru0%7Cci%3Dshopn%7Ctr%3Dsls%7Chk%3Deb4a7da188ce10e56a58d0d4b5ae2d3406bc016d%7Ctrx%3Dundefined'> <img src='https://shop-phinf.pstatic.net/20240305_172/1709645235061wcIcH_JPEG/110781018747504926_731321613.jpg?type=f296_296'>
          </img></a>
        </div>
      </div>

    )
  }

  export default Board