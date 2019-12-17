import React, { Component } from 'react';

//Custom Component
import BoroughData from './BoroughData';

class Bronx extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h1 styleName="borough">Bronx</h1>
        <BoroughData year={this.props.year} />
      </div >
    )
  }
}
export default Bronx