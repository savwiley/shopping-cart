import React from "react";
import Catalog from "./catalog.json";

const ApparelLogic = () => {

  const Apparel = [];
  const arr = Catalog.filter(e => e.category === "apparel");
  Apparel.push(arr);

  console.log(Apparel);

  return (
    <a href="URL">
      <div className="products">
        {Apparel[0].map((e) => (
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

export default ApparelLogic;