import React from "react";
import NavBar from "./components/navBar.js";
import Footer from "./components/footer.js";
import Items from "./components/itemPage.js";

function App(cart) {
  //always opens to top of page
  window.scrollTo(0, 0);

  return (
    <div className="main">
      <NavBar cart={cart.cart} />

      <div className="header">
        <div id="blurb">
          <span id="head">Girl Wonder</span>
          <span>Fasion For Us</span>
        </div>
      </div>

      <div id="product-section">
        <Items filter={"all"} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
