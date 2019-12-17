import React, { Component } from 'react';
import { Link } from 'react-router-dom'

//Custom Component
import Menu from "./Menu"

//Images
import skyline from "../assets/skyline.png"

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
    const headerWrapper = {
      width: "100%",
    }
    const header = {
      backgroundColor: "#4392F1",
      paddingTop: "2vh",
      paddingBottom: "4vh",
      margin: "-5vh -5vw 2vh -5vw",
      borderBottom: "2vh solid #EFDDD2",
    }

    const h1 = {
      color: "#EFDDD2",
      fontFamily: "Fjalla One",
      fontSize: "70px",
      fontWeight: "300",
      letterSpacing: "5px",
      textShadow: "3px 4px black",
      paddingBottom: "5vh",
      margin: "6vh 25vw 7vh 25vw",
      // borderBottom: "1vh dotted #EFDDD2",
    }

    const home = {
      color: "inherit",
      textDecoration: "none",
    }

    const description = {
      margin: "-4vh auto 0vh auto",
      color: "black",
    }

    const selectBorough = {
      fontSize: "24px",
      color: "#EFDDD2",
      padding: "15px",
      borderBottom: "1px solid #EFDDD2",
      margin: "3vh 35vw",
    }

    const image = {
      backgroundColor: "#4392F1",
      margin: "2vh 0 -20vh 0",
      height: "35vh"
    }

    return (
      <div>
        <div style={headerWrapper}>
          <header style={header}
            onMouseEnter={this.hoverEnter}
            onMouseLeave={this.hoverLeave}>
            <img src={skyline} alt="skyline" style={image} />
            <Link to="/" style={home} onClick={this.loadMenu}>
              <h1 style={h1}>Evolving NYC</h1>
            </Link>
            <p style={description}>Tracking reconstruction plans in the city using the NYC Department of Buildings permit database </p>
          </header >
        </div>
        {this.state.onHome &&
          <p style={selectBorough}>Select your Borough</p>}
        <Menu
          onHome={this.state.onHome}
          loadMenu={this.loadMenu}
        />
      </div >
    )
  }
}

export default Header