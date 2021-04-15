import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {


  return (
    <div className="navBar">
      <div id="brand">
        <Link to="/">Girl Wonder</Link>
      </div>

      <div id="menu">
        <Link to="/Apparel">Apparel</Link>
        <Link to="/Jewelry">Jewelry</Link>
        <Link to="/Cosmetics">Cosmetics</Link>
        <Link to="/Cart">Checkout</Link>
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