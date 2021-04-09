import React from "react";
import Catalog from "./catalog.json";
import aotearring from "../images/aotearring.jpg";

const Items = (props) => {
  const { filter } = props;

  let products = [];

  if (filter === "apparel"){
    const arr = Catalog.filter(e => e.category === "apparel");
    products = [];
    products.push(arr);
  } else if (filter === "jewelry"){
    const arr = Catalog.filter(e => e.category === "jewelry");
    products = [];
    products.push(arr);
  } else if (filter === "cosmetics"){
    const arr = Catalog.filter(e => e.category === "cosmetics");
    products = [];
    products.push(arr);
  } else if (filter === "all") {
    products = [];
    products.push(Catalog);
  }

  return (
    <a href="URL">
      <div className="products">
        {products[0].map((e) => (
          <div
          className="item-block"
          id={e.category}
          key={e.product}
          >
            <div 
            id="item-image"
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/savwiley/shopping-cart/master/src/images/${e.image}.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}>
            </div>
            <span id="item-name">
              {e.product}
            </span>
            <span id="item-price">
              ${e.price}
            </span>
          </div>
        ))}
      </div>
    </a>
  )
}

export default Items;

/**see Product Page
 * 
 * a list of items can be found in catalog.json
 * include name, image, price, +/- quantity, cart btn, desc
 * 
 * this was going to be the logic that put the main part of this page together but maybe that should all be in Product.js.
 * 
 * it was put here because there were going to be a bunch of items and this would have been easier to organize them through the catalog array??
 * 
 * OR this is the individual item blocks on the store front
 * OR the blocks as a whole
 * 
 * 
 * 
 * 
 * FOR THE IMAGES
 * 
 * perhaps I can create a variable that changes with if statments, like the filtering arrays. but that would be a lot of if statements...
 */