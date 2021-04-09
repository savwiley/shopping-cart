import React from "react";
import NavBar from "./components/navBar.js";
import Footer from "./components/footer.js";
import FilterLogic from "./components/filterLogic.js";

const Cosmetics = () => {

  return (
    <>
      <NavBar />

      <div id="product-section" className="subsection">
        <FilterLogic filter={"cosmetics"} />
      </div>

      <Footer />
    </>
  )
}

export default Cosmetics;