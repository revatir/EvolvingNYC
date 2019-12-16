import React, { Component } from 'react';

//Custom Component
import BoroughData from './BoroughData';

class StatenIsland extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h1 className="borough">Staten Island</h1>
        <BoroughData year={this.props.year} />
      </div >
    )
  }
}
export default StatenIsland