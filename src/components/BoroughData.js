import React, { Component } from 'react';

//Api Calls
import { FetchData } from '../services/apihelper'

//Custom Component
import PermitsIssued from './PermitsIssued'

class BoroughData extends Component {
  constructor(props) {
    super(props)

    this.state = {
      demolitionPermits: 0,
      newBuildingPermits: 0,
      lastYearDemolitionRatio: 0,
      lastYearNewBuildingRatio: 0,
      clickedComment: "",
      clicked: false,
    }
  }

  getPermitData = async (year, clickedId) => {
    //Establishing Click Functionality
    let clicked = this.state.clicked;
    let clickedComment = this.state.clickedComment;
    clickedComment = clickedId;

    let borough = document.querySelector(".borough").innerHTML;
    borough = borough.toUpperCase();

    //Pulling Permit Data
    if (clicked === false) {
      clicked = true
      let demolitionPermits = this.state.demolitionPermits;
      let newBuildingPermits = this.state.newBuildingPermits;
      let previousYearDemolitionResponse = await FetchData("DM", borough, year - 1);
      let previousYearNewBuildingResponse = await FetchData("NB", borough, year - 1);
      let demolitionResponse = await FetchData("DM", borough, year);
      let newBuildingResponse = await FetchData("NB", borough, year);

      demolitionPermits = demolitionResponse.length;
      newBuildingPermits = newBuildingResponse.length

      //Calculating Percent Change from Data
      let percentChange = (A, B) =>
        Math.round(
          100 * Math.abs(
            (A - B) / ((A + B) / 2)
          )
        );
      ;
      let lastYearDemolitionRatio = percentChange(previousYearDemolitionResponse.length, demolitionPermits);
      let lastYearNewBuildingRatio = percentChange(previousYearNewBuildingResponse.length, newBuildingPermits);

      //Setting State
      this.setState({
        demolitionPermits,
        newBuildingPermits,
        lastYearDemolitionRatio,
        lastYearNewBuildingRatio,
        clickedComment,
        clicked,
      })
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
    )
  }
}

export default BoroughData;