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
