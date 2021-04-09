import React from "react";
import NavBar from "./components/navBar.js";
import Footer from "./components/footer.js";
import ApparelLogic from "./components/apparelLogic.js";

const Apparel = () => {

  return (
    <>
      <NavBar />

      <div id="product-section" className="subsection">
        <ApparelLogic />
      </div>

      <Footer />
    </>
  )
}

export default Apparel;