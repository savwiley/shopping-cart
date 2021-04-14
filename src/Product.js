import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import Catalog from "./components/catalog.json";
import NavBar from "./components/navBar.js";
import Footer from "./components/footer.js";
import CartBtn from "./components/cartBtn";

const Product = () => {
  let { id } = useParams();
  const quant = useRef(1);

  //brings up correct product using params
  const filterArr = (image) => {
    let arr = [];
    if (image === id) {
      return arr.push(image);
    }
  }
  let product = Catalog.filter((e) => {
    return filterArr(e.image);
  });

  useEffect(() => {
    const input = document.querySelector("#inputQ");
    const add = document.querySelector("#addBtn");
    const sub = document.querySelector("#subBtn");
    let numb = 1;

    const changeQuant = (dom) => {
      if (input && dom === "change") {
        numb = Number(input.value);
      } else if (add && dom === "add") {
        numb += 1;
      } else if (sub && dom === "sub") {
        if ( numb > 0) {
          numb -= 1;
        };
      };

      quant.current = numb;
      input.value = quant.current;
    }
    
    input.addEventListener("change", () => {
      changeQuant("change");
    });
    add.addEventListener("click", () => {
      changeQuant("add");
    });
    sub.addEventListener("click", () => {
      changeQuant("sub");
    });
  }, []);

   /**
    * add to cart
    * 
    * We need to send the item & quantity to the cart and set item(s)/total quantity on the header.
    * 
    * Perhaps there's another file, maybe a json, with a big array that includes all of the cart items. Some sort of class so we can easily add and remove things.
    * 
    * We could use props maybe? to send e.image/key & quant? Buuuut I'm not sure how we'd keep track. It's going to have to be some sort of array thing, I think.
    */


  return (
    <>

      <NavBar />

        {product.map((e) => (
          <div className="prodMain"
          key={e.image}>
            <div
            id="prodImage"
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/savwiley/shopping-cart/master/src/images/${e.image}.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}>
            </div>

            <div id="prodInfo">
              <span id="prodName">
                {e.product}
              </span>
              <span id="prodDesc">
                {e.desc}
              </span>
              <span id="prodPrice">
                ${e.price}
              </span>

              <div className="quantity">
                <button id="subBtn">-</button>
                <input id="inputQ" type="number" defaultValue={1} />
                <button id="addBtn">+</button>
              </div>

              <CartBtn item={e} qty={quant} />

            </div>
          </div>
        ))}

      <Footer />

    </>
  )
}

export default Product;


/**Product Page
 * 
 * a list of items can be found in catalog.json
 * include name, image, price, +/- quantity, cart btn, desc
 */