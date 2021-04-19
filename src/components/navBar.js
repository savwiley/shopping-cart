import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavBar = (props) => {
  const { cart } = props;

  let total = 0;

  if (cart.length > 0) {
    const quantTotals = cart.map((e) => e.quant);
    const reducer = (accu, val) => accu + val;
    total = quantTotals.reduce(reducer);
  }

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
          <span id="cartNumb">{total}</span>)
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
