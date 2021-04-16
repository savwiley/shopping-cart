import React from "react";
import NavBar from "./components/navBar.js";
import Footer from "./components/footer.js";
import Items from "./components/itemPage.js";

const Cosmetics = (cart) => {
  return (
    <div className="main">
      <NavBar cart={cart.cart} />

      <div id="product-section" className="subsection">
        <Items filter={"cosmetics"} />
      </div>

      <Footer />
    </div>
  );
};

export default Cosmetics;
