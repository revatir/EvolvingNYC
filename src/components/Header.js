import React, { Component } from 'react';
import { Link } from 'react-router-dom'

//Custom Component
import Menu from "./Menu"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onHome: true,
    }
  }

  loadMenu = () => {
    let onHome = this.state.onHome;
    if (onHome === true) {
      onHome = false;
    } else if (onHome === false) {
      onHome = true;
    }
    this.setState({
      onHome,
    })
  }

  render() {
    const h1 = {
      fontSize: "45px",
      marginTop: "5vh",
      marginBottom: "2vh",
    }

    const home = {
      color: "inherit",
      textDecoration: "none",
    }

    return (
      <header>
        <h1 style={h1}>Evolving NYC</h1>
        <Link to="/" style={home} onClick={this.loadMenu}>
          <p>
            Home
         </p>
        </Link>
        {this.state.onHome &&
          <Menu
            onHome={this.state.onHome}
            loadMenu={this.loadMenu}
          />
        }
      </header >
    )
  }
}

export default Header