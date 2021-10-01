import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  Conditioinal = () => {

    if (this.props.opacity >= 0.2) {
      
    }
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        {/* your conditional code here! */ }
      </div>
    )
  }

}

