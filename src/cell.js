import React, { Component } from 'react';


// const handleClick = ((e) => {
//     console.log('hi')
//     this.setState = (color = '#333')
// })

// const handleClick = e => this.setState = (color = '#333')

export default class Cell extends Component {


//

constructor(props) {
    super (props)
    this.state = {
        color: this.props.value
    }
}


render(){
    return (
    <div className="cell" style={{backgroundColor: this.state.color}} onClick = {e => this.setState({color: '#333'})}>
    </div>
    )
}
 


}

