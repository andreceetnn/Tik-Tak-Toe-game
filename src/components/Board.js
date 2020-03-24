import React, { Component } from "react";
import Square from "./Square";

export default class Board extends Component {
    onSquareClicked= (i)=>{
        console.log("box Number", i)
        //1. make an array and copy parents arr
        let squareList = this.props.squares.slice();
        //2. change the value of the new arr
        squareList[i] = this.props.nextPlayer? "O":"X"
        //3.insert new arr into parents arr
        this.props.setParentsState({squares:squareList, nextPlayer:!this.props.nextPlayer})
    }
     findWinner = (squares) => {
        const moves = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < moves.length; i++) {
          const [a, b, c] = moves[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
             return squares[a];
      }
    }
    return null;
      }
  render() {
      let status='';
      status= this.props.nextPlayer?`O`:`X`;
     
      const winner = findWinner(this.props.squares);

    return (
      <div>
              <h5>Next Player: {status}</h5>

        <div style={{ display: "flex" }}>
          <Square value={this.props.squares[0]} onClick={() => this.onSquareClicked(0)} />
          <Square value={this.props.squares[1]} onClick={() => this.onSquareClicked(1)} />
          <Square value={this.props.squares[2]} onClick={() => this.onSquareClicked(2)} />
        </div>{" "}
        <div style={{ display: "flex" }}>
          <Square value={this.props.squares[3]} onClick={() => this.onSquareClicked(3)} />
          <Square value={this.props.squares[4]} onClick={() => this.onSquareClicked(4)} />
          <Square value={this.props.squares[5]} onClick={() => this.onSquareClicked(5)} />
        </div>{" "}
        <div style={{ display: "flex" }}>
          <Square value={this.props.squares[6]} onClick={() => this.onSquareClicked(6)} />
          <Square value={this.props.squares[7]} onClick={() => this.onSquareClicked(7)} />
          <Square value={this.props.squares[8]} onClick={() => this.onSquareClicked(8)} />
        </div>
      </div>
    );
  }
}
