import React from 'react';

function PermitsIssued(props) {
  //if shouldOpen is true, display data.
  return props.shouldOpen &&
    <div className="yearData">
      <p><span className="dataType">Demolition Permits:</span> {props.demolitionPermits}</p>
      <p className="percentData"><span className="dataType">Change from Prior Year:</span> {props.lastYearDemolitionRatio}%</p>
      <p><span className="dataType">New Building Permits:</span> {props.newBuildingPermits}</p>
      <p className="percentData"><span className="dataType">Change from Prior Year:</span> {props.lastYearNewBuildingRatio}%</p >
    </div >
}

export default PermitsIssued