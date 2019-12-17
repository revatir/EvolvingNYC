import React from 'react'

function Footer() {

  const footerWrapper = {
    width: "100%",
  }

  const footer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "2vh",
    borderRadius: "15px",
    margin: "10vh 40vw 1vh 40vw",
    color: "black",
    fontSize: "1.5vh",
    fontWeight: "100",
  }

  return (
    <div style={footerWrapper}>
      <footer style={footer}>(c) Revati Rajabhathor</footer>
    </div>
  )
}

export default Footer