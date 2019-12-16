import React, { Component } from 'react';
import BoroughData from './BoroughData';

class Queens extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1 className="borough">Queens</h1>
        <BoroughData year={this.props.year} />
      </div >
    )
  }
}
export default Queens