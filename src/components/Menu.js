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
    const list = {
      display: "flex",
      listStyle: "none",
      justifyContent: "space-evenly",
      margin: "-1vw 5vw 6vw 0vw",
    }

    const menuItem = {
      textDecoration: "none",
    }

    return (
      <menu>
        {this.props.onHome &&
          <ul style={list}>
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