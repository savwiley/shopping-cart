import React from "react";
import NavBar from "./components/navBar.js";
import Footer from "./components/footer.js";
import FilterLogic from "./components/filterLogic.js";

const Apparel = () => {

  return (
    <>
      <NavBar />

      <div id="product-section" className="subsection">
        <FilterLogic filter={"apparel"} />
      </div>

      <Footer />
    </>
  )
}

export default Apparel;