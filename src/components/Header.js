import React, { Component } from 'react';
import { Link } from 'react-router-dom'

//Custom Component
import Menu from "./Menu"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onHome: true,
      hover: false
    }
  }

  loadMenu = () => {
    let onHome = this.state.onHome;
    let hover = this.state.hover;
    if (onHome === true) {
      onHome = false;
      hover = false;
    } else if (onHome === false) {
      onHome = true;
      hover = false;
    }
    this.setState({
      onHome,
      hover,
    })
  }

  hoverEnter = () => {
    this.setState({ hover: true })
  }

  hoverLeave = () => {
    this.setState({ hover: false })
  }

  render() {
    const header = {
      paddingTop: "2vh",
      paddingBottom: "-15vh",
      margin: "-5vw 0vw 5vw 0vw",
      overflow: "hidden",
    }

    const h1 = {
      color: "rgb(234, 174, 23)",
      backgroundColor: "black",
      fontFamily: "Fjalla One",
      fontSize: "5vw",
      fontWeight: "300",
      padding: "1.75vw 1.75vw",
      margin: "15vw 25vw 1vw 25vw",
      // borderBottom: "1.5vh dotted rgb(234, 174, 23)",
      border: "1px solid rgb(234, 174, 23)",
    }

    const home = {
      color: "inherit",
      textDecoration: "none",
    }

    const description = {
      color: "rgb(234, 174, 23)",
      fontSize: "1.25vw",
      fontWeight: "200",
      backgroundColor: "black",
      padding: "1.5vw 50px 50px 50px",
      margin: "-19vw 0 -1vw 0",
    }

    return (
      <div>
        <div className="headerWrapper">
          <header style={header} className="imageWrapper"
            onMouseEnter={this.hoverEnter}
            onMouseLeave={this.hoverLeave}>
            <Link to="/" style={home} onClick={this.loadMenu}>
              <h1 style={h1} className="hoverHeader">Evolving NYC</h1>
            </Link>
          </header >
          <p style={description}>Tracking Reconstruction Trends in New York City</p>
        </div>
        <Menu
          onHome={this.state.onHome}
          loadMenu={this.loadMenu}
        />
      </div >
    )
  }
}

export default Header