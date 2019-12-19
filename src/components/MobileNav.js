import React from 'react'

function MobileNav() {
  return (
    <div>
      <div class="topnav">
        <a href="#home" class="active">Logo</a>
        {/* <!-- Navigation links (hidden by default) --> */}
        <div id="myLinks">
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        {/* <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links --> */}
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </div>
  )
}

export default MobileNav