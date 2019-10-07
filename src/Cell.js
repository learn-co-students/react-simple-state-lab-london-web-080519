// import React, {Component} from 'react'
import React from "react";

export default class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.value
    };
  }

  colorUpdate = () => {
    this.setState({
      color: "#333"
    });
    // console.log("I was clicked");
  };

  render() {
    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={this.colorUpdate}
      ></div>
    );
  }
}
