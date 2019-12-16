import React from 'react';

function PermitsIssued(props) {

  return (
    <div>
      <p>Demolition Permits Issued: {props.demolitionPermits}</p>
      <p>Percent Change from Previous Year: {props.lastYearDemolitionRatio}%</p>
      <p>New Building Permits Issued: {props.newBuildingPermits}</p>
      <p>Percent Change from Previous Year: {props.lastYearNewBuildingRatio}%</p>

    </div>
  )
}

export default PermitsIssued