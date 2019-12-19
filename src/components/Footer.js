import React from 'react'

function Footer() {

  const footerWrapper = {
    backgroundColor: "black",
    padding: "12vw 35vw 0vw 35vw",
  }

  const footer = {
    position: "relative",
    color: "#EABC17",
    backgroundColor: "black",
    fontSize: "1vw",
    fontWeight: "100",
    whiteSpace: "nowrap",
    padding: "1vw 5vw 1vw 6vw",
    border: "1px solid #EABC17",
    margin: "-15vw 2vw 0vw 2vw",
  }

  return (
    <div style={footerWrapper}>
      <footer style={footer}>(c) Revati Rajabhathor</footer>
    </div>
  )
}

export default Footer