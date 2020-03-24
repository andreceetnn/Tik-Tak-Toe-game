import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Board from './components/Board'
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      squares: ['', '', ' ','', '', ' ','', '', ''],
      nextPlayer:false
    }
  }

  setParentsState = (obj) => {
this.setState(obj)
  };

  checkWinner(){
    const moves = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7], 
      [2, 4, 6],
      [2, 4, 8],
      [6, 7, 8],
      [3, 4, 5]
    ]
  }
  render(){
    return (
      <div>
   <h1>
     tik tak tok
     <Board {...this.state} setParentsState = {this.setParentsState}/>
   </h1>   
   </div>)
  }
}

export default App;
