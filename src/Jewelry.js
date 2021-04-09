import React from "react";
import NavBar from "./components/navBar.js";
import Footer from "./components/footer.js";
import Items from "./components/itemPage.js";

const Jewelry = () => {

  return (
    <>
      <NavBar />

      <div id="product-section" className="subsection">
        <Items filter={"jewelry"} />
      </div>

      <Footer />
    </>
  )
}

export default Jewelry;