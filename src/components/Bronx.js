import React, { Component } from 'react';

//Api Calls
import { FetchData } from '../services/apihelper'

//Custom Component
import PermitsIssued from './PermitsIssued'

class Bronx extends Component {
  constructor(props) {
    super(props)

    this.state = {
      demolitionPermits: 0,
      newBuildingPermits: 0,
      lastYearDemolitionRatio: 0,
      lastYearNewBuildingRatio: 0,
      clickedComment: "",
      clicked: false,
      percentChange: 0,
    }
  }

  getPermitData = async (year, clickedId) => {
    let clicked = this.state.clicked
    let clickedComment = this.state.clickedComment
    clickedComment = clickedId

    if (clicked === false) {
      clicked = true

      let demolitionPermits = this.state.demolitionPermits;
      let newBuildingPermits = this.state.newBuildingPermits;
      let demolitionResponse = await FetchData("DM", "BRONX", year);
      let newBuildingResponse = await FetchData("NB", "BRONX", year);

      demolitionPermits = demolitionResponse.length;
      newBuildingPermits = newBuildingResponse.length

      this.setState({
        demolitionPermits,
        newBuildingPermits,
        lastYearDemolitionRatio,
        lastYearNewBuildingRatio,
        clickedComment,
        clicked,
      })
      console.log(this.state.demolitionPermits, this.state.clicked, this.state.clickedComment)
    } else {
      clicked = false
      this.setState({
        clicked,
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Bronx</h1>
        <div>
          {this.props.year.map((year, index) =>
            <div key={index} className="year">
              <h4 onClick={() => this.getPermitData(year, index)}>{year}</h4>
              {this.state.clicked && this.state.clickedComment === index ?
                <PermitsIssued
                  lastYearDemolitionRatio={this.state.lastYearDemolitionRatio}
                  lastYearNewBuildingRatio={this.state.lastYearNewBuildingRatio}
                  demolitionPermits={this.state.demolitionPermits}
                  newBuildingPermits={this.state.newBuildingPermits}
                />
                : null
              }
            </div>
          )}
        </div>
      </div >
    )
  }
}

export default Bronx