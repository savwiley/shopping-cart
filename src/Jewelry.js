import React from "react";
import NavBar from "./components/navBar.js";
import Footer from "./components/footer.js";
import FilterLogic from "./components/filterLogic.js";

const Jewelry = () => {

  return (
    <>
      <NavBar />

      <div id="product-section" className="subsection">
        <FilterLogic filter={"jewelry"} />
      </div>

      <Footer />
    </>
  )
}

export default Jewelry;