import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import Catalog from "./components/catalog.json";
import NavBar from "./components/navBar.js";
import Footer from "./components/footer.js";
//import CartBtn from "./components/cartBtn";
//import Routes from "./Routes";

const Product = ({ addToCart }) => {
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

  useEffect(() => {
    const btn = document.querySelector(".addCart");

    const addCart = (item, qty) => {
      addToCart(item, qty);
    }

    if (btn) {
      btn.addEventListener("click", () => {
        addCart(product, quant)
      })
    }
  })


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

              <button
                className="addCart">
                  Add to Cart
              </button>

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