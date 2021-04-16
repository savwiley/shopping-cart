import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavBar = (props) => {
  const { cart } = props;

  return (
    <div className="navBar">
      <div id="brand">
        <Link to="/">Girl Wonder</Link>
      </div>

      <div id="menu">
        <Link to="/Apparel">Apparel</Link>
        <Link to="/Jewelry">Jewelry</Link>
        <Link to="/Cosmetics">Cosmetics</Link>
        <Link to="/Cart">
          <FontAwesomeIcon icon={faShoppingCart} />(
          <span id="cartNumb">{cart.length}</span>)
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
