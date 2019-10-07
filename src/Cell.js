import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super(props)
        this.state= {
            color: props['value']
        }
    }

    change = () => {
        this.setState({
            color: this.state.color = "#333"
        })
    }

    render() {
        return (
            <div onClick={this.change} className="cell" state={this.state.color} style={{backgroundColor: this.state.color}}></div>
        )
    }
}