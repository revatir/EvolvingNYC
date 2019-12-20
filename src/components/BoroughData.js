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
    ///Establishing Click Functionality
    //In state, set recentlyClickedId as the index of the clicked year.
    let recentlyClickedId = this.state.recentlyClickedId;
    recentlyClickedId = clickedId;

    //Changed to uppercase because API does not accept lowercase requests.
    let borough = document.querySelector(".borough").innerHTML;
    borough = borough.toUpperCase();


    ///Pulling Permit Data
    let demolitionPermits = this.state.demolitionPermits;
    let newBuildingPermits = this.state.newBuildingPermits;
    let previousYearDemolitionResponse = await FetchData("DM", borough, year - 1);
    let previousYearNewBuildingResponse = await FetchData("NB", borough, year - 1);
    let demolitionResponse = await FetchData("DM", borough, year);
    let newBuildingResponse = await FetchData("NB", borough, year);

    demolitionPermits = demolitionResponse.length;
    newBuildingPermits = newBuildingResponse.length

    //Calculating Percent Change
    let percentChange = (A, B) =>
      Math.round(
        100 * Math.abs(
          (A - B) / ((A + B) / 2)
        )
      );
    ;
    let lastYearDemolitionRatio = percentChange(previousYearDemolitionResponse.length, demolitionPermits);
    let lastYearNewBuildingRatio = percentChange(previousYearNewBuildingResponse.length, newBuildingPermits);
    ///Instructs page to show only the clicked element (and close all others)
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
              <PermitsIssued
                lastYearDemolitionRatio={this.state.lastYearDemolitionRatio}
                lastYearNewBuildingRatio={this.state.lastYearNewBuildingRatio}
                demolitionPermits={this.state.demolitionPermits}
                newBuildingPermits={this.state.newBuildingPermits}
                //getPermitData() takes the index of the clicked item as a paramenter. If the clicked element equals the index, data will be displayed. If not, state for all the others will be set to zero (including their recentlyClickedID). Because the recentlyClicked ID for the others do not match the index (and are therefore false), they will not display.
                shouldOpen={this.state.recentlyClickedId === index ? true : false}
              />
            </div>
          )
        }
      </div>
    )
  }
}

export default BoroughData;