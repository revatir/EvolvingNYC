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
      recentlyClickedId: "",
    }
  }

  getPermitData = async (year, clickedId) => {
    //Establishing Click Functionality
    let recentlyClickedId = this.state.recentlyClickedId;
    recentlyClickedId = clickedId;

    let borough = document.querySelector(".borough").innerHTML;
    borough = borough.toUpperCase();


    //Pulling Permit Data
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

    if (this.state.recentlyClickedId === clickedId) {
      //Setting State
      this.setState({
        demolitionPermits: 0,
        newBuildingPermits: 0,
        lastYearDemolitionRatio: 0,
        lastYearNewBuildingRatio: 0,
        recentlyClickedId: ""
      })
    } else {
      this.setState({
        demolitionPermits,
        newBuildingPermits,
        lastYearDemolitionRatio,
        lastYearNewBuildingRatio,
        recentlyClickedId
      })
    }

  }


  render() {
    return (
      <div className="dataContainer">
        {
          this.props.year.map((year, index) =>
            <div key={index} className="yearContainer">
              <h4 onClick={() => this.getPermitData(year, index)} className="year">{year}</h4>
              {/* {this.state.clicked && this.state.recentlyClickedId === index ? */}
              <PermitsIssued
                lastYearDemolitionRatio={this.state.lastYearDemolitionRatio}
                lastYearNewBuildingRatio={this.state.lastYearNewBuildingRatio}
                demolitionPermits={this.state.demolitionPermits}
                newBuildingPermits={this.state.newBuildingPermits}
                shouldOpen={this.state.recentlyClickedId === index ? true : false}
              />
              : null
              {/* } */}
            </div>
          )
        }
      </div>
    )
  }
}

export default BoroughData;