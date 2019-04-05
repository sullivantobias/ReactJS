import React from 'react';
import './index.scss';

import {Board} from "./Board";

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      clickedSquarePos: '',
      timer: {
        count: 5,
        interval: 0
      },
    };
  }

  runTimer() {
    clearInterval(this.state.timer.interval);
    this.setState({timer: {count: 5}});
    const intervalCounter = setInterval(() => {
      this.setState({timer: {count: this.state.timer.count - 1, interval: intervalCounter}})
    }, 1000);
  }

  handleClick(i, pos) {
    this.runTimer();
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      clickedSquarePos: `You Clicked at pos: Row ${pos.row} and col ${pos.col}`,
    });
  }

  jumpTo(step) {
    clearInterval(this.state.timer.interval);
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    if (this.state.timer.count === 0) {
      return {winner: !this.state.xIsNext ? "X" : "O"};
    }

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {winner: squares[a], winnerSquares: lines[i]};
      }
    }
    return null;
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    let status;
    let isDisabled;
    let winnerSquares;
    let timerStatus = "You have " + this.state.timer.count + " seconds to play";


    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move} className={'temporalButton'}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });


    if (winner || this.state.timer.count === 0) {
      clearInterval(this.state.timer.interval);

      winnerSquares = winner.winnerSquares;
      isDisabled = true;
      status = "Winner: " + winner.winner;
    } else {
      isDisabled = false;
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <h1>Tic Tac Toe Section </h1>
        <div className='status'>{status}</div>
        <div className="timer">{timerStatus}</div>
        <div className="clickedPos">
          {this.state.clickedSquarePos}
        </div>
        <div className="game-board">
          <Board
            won={winnerSquares}
            isDisabled={isDisabled}
            squares={current.squares}
            onClick={(i, pos) => this.handleClick(i, pos)}
          />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
        <hr/>
      </div>
    );
  }
}

