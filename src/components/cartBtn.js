import React from "react";
import CartList from "./cart.json";
//import Catalog from "./catalog.json";
//import Product from "../Product.js";

const CartBtn = (props) => {
  const { item, qty } = props;

  const arrPush = () => {
    CartList.push({
      product: item.product, 
      price: item.price,
      image: item.image,
      link: item.link,
      quant: qty.current
    })
  }

  return (
    <>
      <button
        className="addCart"
        onClick={arrPush}>
          Add to Cart
      </button>
    </>
  )
}

export default CartBtn;

/**
 * a btn with the logic to add something to a cart array
 * 
 * see Product.js
 * 
 * array of cart items

if the json cannot be auto-edited, then I'll try to make a js class file that'll hold it all

regardless, remember to adjust quantities OR add/rm based on quantity?

https://stackoverflow.com/questions/48801651/reactjs-adding-element-to-array-object-in-json
 */