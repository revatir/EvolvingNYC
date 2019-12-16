import React, { Component } from 'react';
import BoroughData from './BoroughData';

class Brooklyn extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1 className="borough">Brooklyn</h1>
        <BoroughData year={this.props.year} />
      </div >
    )
  }
}
export default Brooklyn