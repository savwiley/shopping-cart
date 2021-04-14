import React from "react";


const NavBar = () => {

  return (
    <div className="navBar">
      <div id="brand">
        <a href="/">Girl Wonder</a>
      </div>

      <div id="menu">
        <a href="/Apparel">Apparel</a>
        <a href="/Jewelry">Jewelry</a>
        <a href="/Cosmetics">Cosmetics</a>
        <a href="/Cart">Checkout</a>
      </div>
    </div>
  )
}

/**
 * add cart qty to Checkout
 */


export default NavBar;







/**
 * create fixed top nav bar for every page
 * includes store name with link to home & # of items in cart
 */