import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Square extends Component {
  render() {
    return (
      <div>
        <Button
          onClick={() => this.props.onClick()}
          style={{
            width: "150px",
            height: "150px",
            fontSize: "50px",
            border: "1px solid white",
            backgroundColor: "#376996"
          }}
          variant="light"
        >
          {this.props.value}
        </Button>
      </div>
    );
  }
}

export default Square;
