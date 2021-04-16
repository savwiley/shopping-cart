import React from "react";
import { Link } from "react-router-dom";
import Catalog from "./catalog.json";

const Items = (props) => {
  const { filter } = props;

  let products = [];

  if (filter === "apparel") {
    const arr = Catalog.filter((e) => e.category === "apparel");
    products = [];
    products.push(arr);
  } else if (filter === "jewelry") {
    const arr = Catalog.filter((e) => e.category === "jewelry");
    products = [];
    products.push(arr);
  } else if (filter === "cosmetics") {
    const arr = Catalog.filter((e) => e.category === "cosmetics");
    products = [];
    products.push(arr);
  } else if (filter === "all") {
    products = [];
    products.push(Catalog);
  }

  return (
    <div className="products">
      {products[0].map((e) => (
        <Link to={e.link} key={e.product}>
          <div className="item-block" id={e.category}>
            <div className="imageBorder">
              <div
                id="item-image"
                style={{
                  backgroundImage: `url(https://raw.githubusercontent.com/savwiley/shopping-cart/master/src/images/${e.image}.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <span id="item-name">{e.product}</span>
            <span id="item-price">${e.price}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Items;
