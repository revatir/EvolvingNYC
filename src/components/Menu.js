import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hover: false
    }
  }

  render() {
    const menuItem = {
      textDecoration: "none",
    }

    return (
      <menu className="menu">
        {this.props.onHome &&
          <p className="selectBorough">Select your Borough</p>
        }
        {this.props.onHome &&
          <ul className="list">
            <Link style={menuItem} to="Queens"
              onClick={this.props.loadMenu}
              onMouseEnter={this.hoverEnter}
              onMouseLeave={this.hoverLeave}>
              <li id="Queens">Queens</li></Link>
            <Link style={menuItem} to="Brooklyn"
              onClick={this.props.loadMenu}
              onMouseEnter={this.hoverEnter}
              onMouseLeave={this.hoverLeave}>
              <li id="Brooklyn">Brooklyn</li></Link>
            <Link style={menuItem} to="Manhattan"
              onClick={this.props.loadMenu}
              onMouseEnter={this.hoverEnter}
              onMouseLeave={this.hoverLeave}>
              <li id="Manhattan">Manhattan</li></Link>
            <Link style={menuItem} to="Bronx"
              onClick={this.props.loadMenu}
              onMouseEnter={this.hoverEnter}
              onMouseLeave={this.hoverLeave}>
              <li id="Bronx">Bronx</li></Link>
            <Link style={menuItem} to="StatenIsland"
              onClick={this.props.loadMenu}
              onMouseEnter={this.hoverEnter}
              onMouseLeave={this.hoverLeave}>
              <li id="Staten-Island">Staten Island</li></Link>
          </ul>
        }
        {this.props.onHome &&
          <p className="homePageBlurb">Evolving NYC aims to track reconstruction plans in the city using the NYC Department of Buildings permit database. By selecting a borough you will be able to see how many demolition and new building permits were issued each year for the last 19 years. The ultimate goal is to create a tool that organically tracks plans for development in the city so residents can see projected changes in their community. </p>
        }
      </menu >
    )
  }
}


export default Menu