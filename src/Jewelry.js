import React from "react";
import NavBar from "./components/navBar.js";
import Footer from "./components/footer.js";
import Items from "./components/itemPage.js";

const Jewelry = (cart) => {
  return (
    <div className="main">
      <NavBar cart={cart.cart} />

      <div id="product-section" className="subsection">
        <Items filter={"jewelry"} />
      </div>

      <Footer />
    </div>
  );
};

export default Jewelry;
