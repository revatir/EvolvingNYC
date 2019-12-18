import React from 'react'

function Footer() {

  const footer = {
    position: "absolute",
    color: "#EABC17",
    fontSize: "1.8vh",
    fontWeight: "100",
    whiteSpace: "nowrap",
    padding: "2vh 10vw 2vh 10vw",
    border: "1px solid #EABC17",
    margin: "0vh 35vw 2vh 33vw",
  }

  return (
    <footer style={footer}>(c) Revati Rajabhathor</footer>
  )
}

export default Footer