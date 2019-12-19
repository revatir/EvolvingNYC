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
      </menu >
    )
  }
}


export default Menu