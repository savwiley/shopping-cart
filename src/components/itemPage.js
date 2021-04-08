import React from "react";
import Catalog from "./catalog.json";
import aotearring from "../images/aotearring.jpg";

const Items = () => {

  console.log(typeof(aotearring))
  console.log(typeof(Catalog[0].image))

  return (
    <div className="products">
      {Catalog.map((e) => (
        <div
        className="item-block"
        id={e.category}
        key={e.product}
        >
          <div 
          id="item-image"
          style={{
            backgroundImage: `url(${e.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
            image
          </div>
          {e.product}
        </div>
      ))}
    </div>
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
 */