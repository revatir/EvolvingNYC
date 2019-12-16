import React from 'react';

import { Link } from 'react-router-dom'

function Header() {

  const h1 = {

  }

  const list = {
    display: "flex",
    listStyle: "none",
    justifyContent: "space-evenly",
    marginRight: "5vw"
  }

  const home = {
    marginRight: "3vw"
  }

  return (
    <header>
      <h1 style={h1}>Evolving NYC</h1>
      <menu>
        <Link to="/"><p style={home}>Home</p></Link>
        <ul style={list}>
          <Link to="Queens"><li>Queens</li></Link>
          <Link to="Brooklyn"><li>Brooklyn</li></Link>
          <Link to="Manhattan"><li>Manhattan</li></Link>
          <Link to="Bronx"><li>Bronx</li></Link>
          <Link to="StatenIsland"><li>Staten Island</li></Link >
        </ul >
      </menu >
    </header >
  )
}

export default Header