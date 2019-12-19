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
    return (
      <div>
        <div className="headerWrapper">
          <header className="imageWrapper"
            onMouseEnter={this.hoverEnter}
            onMouseLeave={this.hoverLeave}>
            <Link to="/" className="home" onClick={this.loadMenu}>
              <h1 className="header">Evolving NYC</h1>
            </Link>
          </header >
          <p className="description">Tracking Reconstruction Trends in New York City</p>
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