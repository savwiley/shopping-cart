import React from "react";
import Catalog from "./catalog.json";

const FilterLogic = (props) => {
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

export default FilterLogic;