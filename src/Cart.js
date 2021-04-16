import React from "react";
import NavBar from "./components/navBar.js";
import Footer from "./components/footer.js";
import CartItem from "./components/cartItem.js";

const Cart = ({ cart }) => {
  let total;
  if (cart.length > 0) {
    const quantTotals = cart.map((e) => e.price * e.quant);
    const reducer = (accu, val) => accu + val;
    total = quantTotals.reduce(reducer);
  }

  return (
    <div className="main">
      <NavBar cart={cart} />

      <div id="product-section" className="subsection">
        <CartItem cart={cart} />
      </div>

      <div id="priceTotal">
        {cart.length > 0
          ? `Total: $${total.toFixed(2)}`
          : "No items added to cart."}
      </div>

      {cart.length > 0 ? <button id="checkoutBtn">Checkout</button> : null}

      <Footer />
    </div>
  );
};

export default Cart;
