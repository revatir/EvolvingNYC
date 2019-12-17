import React from 'react'

function Footer() {

  const footer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    marginTop: "10vw",
    color: "#EFDDD2",
    fontWeight: "100",
  }

  return (
    <div>
      <footer style={footer}>(c) Revati Rajabhathor</footer>
    </div>
  )
}

export default Footer