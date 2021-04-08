import React from "react";


const NavBar = () => {

  return (
    <div className="navBar">
      <div id="brand">
        <a href="/">Girl Wonder</a>
      </div>

      <div id="menu">
        <a href="url">Apparel</a>
        <a href="url">Jewelry</a>
        <a href="url">Cosmetics</a>
        <a href="url">Checkout</a>
      </div>
    </div>
  )
}



export default NavBar;







/**
 * create fixed top nav bar for every page
 * includes store name with link to home & # of items in cart
 */