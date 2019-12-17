import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hover: false
    }
  }

  hoverEnter = () => {
    this.setState({ hover: true })
  }

  hoverLeave = () => {
    this.setState({ hover: false })
  }

  render() {
    const list = {
      display: "flex",
      listStyle: "none",
      justifyContent: "space-evenly",
      marginRight: "5.5vh",
    }

    const menuItem = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "inherit",
      // backgroundColor: this.state.hover ? "rgba(214, 190, 175,.7)" : "#EFDDD2",
      backgroundColor: "#EFDDD2",
      fontSize: "20px",
      width: "15vw",
      height: "12vw",
      border: "2px solid black",
      borderRadius: "15px",
      boxShadow: "6px 6px black",
      margin: ".3vw",
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
              <li id="Staten - Island">Staten Island</li></Link>
          </ul>
        }
      </menu >
    )
  }
}


export default Menu