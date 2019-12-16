import React from 'react';
import { Link } from 'react-router-dom'

function Menu(props) {
  const list = {
    display: "flex",
    listStyle: "none",
    justifyContent: "space-evenly",
    marginRight: "5vh",
    marginTop: "25vh",
  }

  const menuItem = {
    color: "inherit",
    textDecoration: "none",
  }

  return (
    <menu>
      {props.onHome &&
        <ul style={list}>
          <Link style={menuItem} to="Queens" onClick={props.loadMenu}><li id="Queens">Queens</li></Link>
          <Link style={menuItem} to="Brooklyn" onClick={props.loadMenu}><li id="Brooklyn">Brooklyn</li></Link>
          <Link style={menuItem} to="Manhattan" onClick={props.loadMenu}><li id="Manhattan">Manhattan</li></Link>
          <Link style={menuItem} to="Bronx" onClick={props.loadMenu}><li id="Bronx">Bronx</li></Link>
          <Link style={menuItem} to="StatenIsland" onClick={props.loadMenu}><li id="Staten - Island">Staten Island</li></Link>
        </ul>
      }
    </menu >
  )
}

export default Menu