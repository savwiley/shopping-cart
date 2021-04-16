import React from "react";
import NavBar from "./components/navBar.js";
import Footer from "./components/footer.js";
import Items from "./components/itemPage.js";

function App(cart) {
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

/**
 * https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/shopping-cart
 * 
 * Think about the component and the folder structure. How could you set up your application? Which components or functionalities do you need?

You should have at least have two pages (a homepage and a shop page, which includes your shopping cart). Let a user navigate between the pages with a navigation bar, which will be shown on both routes.

To your homepage, you can add whatever you’d like! A few images or information will be totally fine; it doesn’t have to be something fancy. The main goal of the project is to focus on setting up the shopping cart. The homepage is there to practice routing using react-router-dom.

On your shopping cart route, a user should see a sticky bar (it can be just a top section as well), which displays the number of items currently in the cart. You should also have a button next to it where you can go to the cart to checkout and pay (however we are not going to implement this logic here).

Build individual card items for each of your products. Display an input field on it, which lets a user manually type in how many items they want to buy. Also, add an increment and decrement button next to it for fine-tuning. You can also display a title for each product as well as an “Add To Cart” button.

Once a user has submitted their order, the amount on the cart itself should adjust.
 */
