import React from 'react';
import {Square} from "./Square";

export class Board extends React.Component {
  renderSquare(i, pos) {
    let isWinnerSquare;

    if (this.props.won && this.props.won.includes(i)) {
        isWinnerSquare = true;
    }

    return (
        <Square
            won={isWinnerSquare}
            isDisabled={this.props.isDisabled}
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i, pos)}
        />
    );
  }

  render() {
    return (
        <div>
          <div className="board-row">
            {this.renderSquare(0, {col: 1, row: 1})}
            {this.renderSquare(1, {col: 2, row: 1})}
            {this.renderSquare(2, {col: 3, row: 1})}
          </div>
          <div className="board-row">
            {this.renderSquare(3, {col: 1, row: 2})}
            {this.renderSquare(4, {col: 2, row: 2})}
            {this.renderSquare(5, {col: 3, row: 2})}
          </div>
          <div className="board-row">
            {this.renderSquare(6, {col: 1, row: 3})}
            {this.renderSquare(7, {col: 2, row: 3})}
            {this.renderSquare(8, {col: 3, row: 3})}
          </div>
        </div>
    );
  }
}