import React from "react";
import { Link } from "react-router-dom";

const CartItem = (props) => {
  const { cart, removeFromCart } = props;

  const removeCart = (item) => {
    const block = document.querySelector(`#${item.image}`);
    if (block) {
      block.remove();
    }
    removeFromCart(item);

    const totalDiv = document.querySelector("#priceTotal");
    const total = Number(totalDiv.textContent.slice(8));
    const itemTotal = item.price * item.quant;
    const newTotal = (total - itemTotal).toFixed(2);
    totalDiv.textContent = `Total: $${newTotal}`;

    if (newTotal < 1) {
      totalDiv.textContent = "No items added to cart.";
      const checkBtn = document.querySelector("#checkoutBtn");
      checkBtn.remove();
    }
  };

  return (
    <div className="products">
      {cart.map((e) => (
        <div className="cart-block" key={e.image} id={e.image}>
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

          <button id="rmCart" onClick={() => removeCart(e)}>
            remove from cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
