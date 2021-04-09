import React from "react";
import NavBar from "./components/navBar.js";
import Footer from "./components/footer.js";
import Items from "./components/itemPage.js";

const Cosmetics = () => {

  return (
    <>
      <NavBar />

      <div id="product-section" className="subsection">
        <Items filter={"cosmetics"} />
      </div>

      <Footer />
    </>
  )
}

export default Cosmetics;