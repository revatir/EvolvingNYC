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
    const selectBorough = {
      fontSize: "2vw",
      fontWeight: "200",
      backgroundColor: "black",
      color: "#EFE7D2",
      paddingTop: "3vw",
      borderTop: "1px solid rgb(234, 174, 23)",
      margin: "-12vw 0vw 4vw -6vw",
    }

    const list = {
      display: "flex",
      backgroundColor: "black",
      listStyle: "none",
      justifyContent: "space-evenly",
      margin: "-2vw 9vw 6vw 0vw",
    }

    const menuItem = {
      textDecoration: "none",
    }

    const menu = {
      marginTop: "-10vw",
      backgroundColor: "black",
    }

    return (
      <menu style={menu}>
        {this.props.onHome &&
          <p style={selectBorough}>Select your Borough</p>
        }
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