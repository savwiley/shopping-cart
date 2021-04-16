import React from "react";
import { Link } from "react-router-dom";

const CartItem = (props) => {
  const { cart } = props;

  return (
    <div className="products">
      {cart.map((e) => (
        <div className="cart-block" key={e.image}>
          <Link to={e.link}>
            <div
              id="cart-image"
              style={{
                backgroundImage: `url(https://raw.githubusercontent.com/savwiley/shopping-cart/master/src/images/${e.image}.jpg)`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </Link>

          <span id="cart-name">{e.product}</span>
          <span id="cart-quant">x{e.quant}</span>
          <span id="cart-price">${(e.price * e.quant).toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
