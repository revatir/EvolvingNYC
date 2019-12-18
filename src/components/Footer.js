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
    marginTop: "0vh",
    marginBottom: "2vh",
    marginRight: "35vw",
    marginLeft: "35vw",
  }

  return (
    <footer style={footer}>(c) Revati Rajabhathor</footer>
  )
}

export default Footer