import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./App.css";
import FacebookLogin from "react-facebook-login";
import Board from "./components/Board";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      nextPlayer: false,
      history: [],
      user: "",
      topRank: []
    };
  }

  setParentsState = obj => {
    this.setState(obj);
  };

  showHistory = (item, idx) => {
    this.setState({
      squares: item.squares,
      nextPlayer: item.nextPlayer,
      history: this.state.history.filter((e, i) => i <= idx)
    });
  };

  responseFacebook = response => {
    console.log(response);
    this.setState({ user: response.name });
  };

  postData = async duration => {
    let data = new URLSearchParams();

    data.append("player", this.state.user); 
    data.append("score", duration);
    const url = `http://ftw-highscores.herokuapp.com/tictactoe-dev`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: data.toString(),
      json: true
    });
    this.showData();
  };

  showData = async () => {
    const url = `http://ftw-highscores.herokuapp.com/tictactoe-dev`;
    let result = await fetch(url);
    let resultData = await result.json();
    this.setState({ topRank: resultData.items });
  };

  restartGame = () => {
    // this.getData();
    this.setState({
      squares: ['', '', '', '', '', '', '', '', ''],
      nextPlayer: true,
      history: [],

    });
  };

  render() {
    // if(!this.state.user){
    //   return(
    //     <div style={{display: "flex", justifyContent: "center", marginTop:"60px"}}>
    //         <FacebookLogin
    //     autoLoad={true}
    //     appId="3529330857141012"
    //     fields="name,email,picture"
    //     callback={resp => this.responseFacebook(resp)}
    //   />
    //     </div>
    //   )
    // }

    return (
      <div className="container" style={{ marginTop: "60px" }}>
        <div style={{ display: "flex" }}>
          <div
            className="col-sm-4"
            style={{
              display: "inline",
              justifyContent: "space-around",
              textAlign: "center"
            }}
          >
            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
              TIC TAC TOE
            </h1>
            <h2 style={{ marginTop: "60px", fontSize: "25px" }}>
              {this.state.user} playing
            </h2>
            <Button
              style={{ marginTop: "40px" }}
              onClick={() => this.restartGame()}
              variant="outline-secondary"
            >
              RESTART
            </Button>
            <ol>
              TOP SCORE{" "}
              {
              this.state.topRank.map(item => {
                return (
                  <li>
                    {item.player}:{item.score}
                  </li>
                );
              })}{" "}
            </ol>
          </div>

          <div className="col-sm-5" style={{ fontSize: "20px" }}>
            {" "}
            <Board
              {...this.state}
              setParentsState={this.setParentsState}
              postData={this.postData}
            />
          </div>

          <div className="container col-sm-3">
            <h3 style={{ fontSize: "20px" }}>HISTORY</h3>{" "}
            <div
              style={{
                border: "3px solid #1F487E",
                borderRadius: "5px",
                minHeight: "450px",
                maxWidth: "190px"
              }}
            >
              <ul style={{ margin: "8px" }}>
                {this.state.history.map((item, idx) => {
                  return (
                    <li>
                      <Button
                        style={{ margin: "4px" }}
                        onClick={() => this.showHistory(item, idx)}
                        variant="outline-secondary"
                      >
                        move #{idx + 1}
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
