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
    const header = {
      paddingTop: "2vh",
      paddingBottom: "2vh",
      margin: "-5vh -5vw 5vh -5vw",
      // borderBottom: ".5vh solid black",
    }

    const h1 = {
      color: "#EABC17",
      fontFamily: "Fjalla One",
      fontSize: "60px",
      fontWeight: "300",
      paddingBottom: "3vh",
      margin: "26vh 30vw 5vh 30vw",
      borderBottom: "1.5vh dotted #EABC17",
    }

    const home = {
      color: "inherit",
      textDecoration: "none",
    }

    const description = {
      fontSize: "1.25vw",
      backgroundColor: "black",
      padding: "15px",
      margin: "-4vh 0 0vh 0",
      color: "#EABC17",
    }

    const selectBorough = {
      fontSize: "24px",
      backgroundColor: "black",
      color: "#EFE7D2",
      padding: "15px",
      // borderBottom: "1px solid #EFE7D2",
      margin: "-5vh -5vw 5vh -5vw",
    }

    // const image = {
    //   margin: "2vh 0 -20vh 0",
    //   height: "30vh",
    // }

    return (
      <div>
        <div className="headerWrapper">
          <header style={header}
            onMouseEnter={this.hoverEnter}
            onMouseLeave={this.hoverLeave}>
            {/* <img src={skyline} alt="skyline" style={image} /> */}
            <Link to="/" style={home} onClick={this.loadMenu}>
              <h1 style={h1} className="hoverHeader">Evolving NYC</h1>
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