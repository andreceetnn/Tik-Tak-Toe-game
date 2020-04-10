import React, { Component } from "react";
import Square from "./Square";
//score logic
//1.when we click the 1st square, time starts
let startTime = 0;
let gameOver = false;

class Board extends Component {
  clickSquare = i => {
    if (startTime == 0) {
      // it will check if this is the first time you click the square
      startTime = Date.now();
    }
    // let isClicked = true;
    console.log("box number:", i);
    // 1.make a new copy arr from the default list
    let squaresList = this.props.squares.slice();
    // 2.change the new fake arr
    squaresList[i] = this.props.nextPlayer ? "O" : "X";
    // 3. assign it to the parents
    this.props.setParentsState({
      squares: squaresList,
      nextPlayer: !this.props.nextPlayer,
      history: [
        ...this.props.history,
        { squares: squaresList, nextPlayer: !this.props.nextPlayer }
      ]
    });
  };

  findWinner = () => {
    const moves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < moves.length; i++) {
      const [a, b, c] = moves[i];
      if (
        this.props.squares[a] &&
        this.props.squares[a] == this.props.squares[b] &&
        this.props.squares[b] == this.props.squares[c]
      ) {
        return this.props.squares[a];
      }
    }
    return null;
  };

  render() {
    let status = "";
    let winner = this.findWinner();

    if (gameOver) {
      status = `GAME OVER!` ;
    } else {
      if (winner) {
        let duration = Date.now() - startTime;
        this.props.postData(duration);
        gameOver=true;
        status = ` WINNER: ${winner}`;
        return <div> {status}</div>;
      } else {
        status = this.props.nextPlayer ? "Next Player: O" : "Next Player: X";
      }
    }

    return (
      <div>
        <h5>{status}</h5>
        <div style={{ display: "flex" }}>
          <Square
            value={this.props.squares[0]}
            onClick={() => this.clickSquare(0)}
          />
          <Square
            value={this.props.squares[1]}
            onClick={() => this.clickSquare(1)}
          />
          <Square
            value={this.props.squares[2]}
            onClick={() => this.clickSquare(2)}
          />
        </div>
        <div style={{ display: "flex" }}>
          <Square
            value={this.props.squares[3]}
            onClick={() => this.clickSquare(3)}
          />
          <Square
            value={this.props.squares[4]}
            onClick={() => this.clickSquare(4)}
          />
          <Square
            value={this.props.squares[5]}
            onClick={() => this.clickSquare(5)}
          />
        </div>
        <div style={{ display: "flex" }}>
          <Square
            value={this.props.squares[6]}
            onClick={() => this.clickSquare(6)}
          />
          <Square
            value={this.props.squares[7]}
            onClick={() => this.clickSquare(7)}
          />
          <Square
            value={this.props.squares[8]}
            onClick={() => this.clickSquare(8)}
          />
        </div>
      </div>
    );
  }
}

export default Board;
