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
      paddingBottom: "2vh",
      margin: "-5vh 0vw 5vh 0vw",
      // borderBottom: ".5vh solid black",
    }

    const h1 = {
      color: "rgb(234, 174, 23)",
      fontFamily: "Fjalla One",
      fontSize: "60px",
      fontWeight: "300",
      padding: "2vh 2vw",
      margin: "25vh 30vw 5vh 30vw",
      // borderBottom: "1.5vh dotted rgb(234, 174, 23)",
      border: "1px solid rgb(234, 174, 23)",
    }

    const home = {
      color: "inherit",
      textDecoration: "none",
    }

    const description = {
      color: "rgb(234, 174, 23)",
      fontSize: "2.5vh",
      fontWeight: "200",
      backgroundColor: "black",
      padding: "25px 50px 50px 50px",
      margin: "-4vh 0 -3vh 0",
    }

    const selectBorough = {
      fontSize: "26px",
      fontWeight: "200",
      backgroundColor: "black",
      color: "#EFE7D2",
      paddingTop: "5vh",
      borderTop: "1px solid rgb(234, 174, 23)",
      margin: "-9vh 0vw 7vh 0vw",
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
            <p style={description}>Tracking Reconstruction Plans in New York City</p>
          </header >
        </div>
        {
          this.state.onHome &&
          <p style={selectBorough}>Select your Borough</p>
        }
        <Menu
          onHome={this.state.onHome}
          loadMenu={this.loadMenu}
        />
      </div >
    )
  }
}

export default Header