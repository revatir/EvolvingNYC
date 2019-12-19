import React from 'react'

function Footer() {

  const footerWrapper = {
    backgroundColor: "black",
    padding: "12vw 35vw",
    margin: "1vw -35vw",
  }

  const footer = {
    position: "absolute",
    color: "#EABC17",
    backgroundColor: "black",
    fontSize: "1vw",
    fontWeight: "100",
    whiteSpace: "nowrap",
    padding: "1vw 5vw 1vw 6vw",
    border: "1px solid #EABC17",
    margin: "-10vw 35vw 0vw 38vw",
  }

  return (
    <div style={footerWrapper}> a
      <footer style={footer}>(c) Revati Rajabhathor</footer>
    </div>
  )
}

export default Footer