import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import App from "./App.js";
import Apparel from "./Apparel.js";
import Jewelry from "./Jewelry.js";
import Cosmetics from "./Cosmetics.js";
import Product from "./Product.js";
import Cart from "./Cart.js";
import Catalog from "./components/catalog.json";

const Routes = () => {
  let cart = [];

  const addToCart = (item, qty) => {
    const prod = Catalog.filter((e) => e.image === item[0].image);

    if (cart.find((e) => e.image === prod[0].image)) {
      //if item is already in the cart, this changes just the quantity
      let newProd = [...cart];
      let prodIndex = cart.findIndex((e) => e.image === prod[0].image);

      newProd[prodIndex] = { ...newProd[prodIndex], quant: qty.current };

      cart = newProd;
    } else {
      //if item isn't in the cart, this adds it
      prod[0].cart = true;
      prod[0].quant = qty.current;
      cart.push(prod[0]);
    }
  };

  const removeFromCart = (item) => {
    const prod = Catalog.filter((e) => e.image === item.image);
    const index = cart.indexOf(prod[0]);
    if (index > -1) {
      cart.splice(index, 1);
    }
    const cartNumb = document.querySelector("#cartNumb");
    const numb = Number(cartNumb.textContent);
    cartNumb.textContent = numb - 1;
  };

  return (
    <HashRouter basename='/'>
      <Switch>
        <Route exact path="/" render={() => <App cart={cart} />} />
        <Route exact path="/Apparel" render={() => <Apparel cart={cart} />} />
        <Route exact path="/Jewelry" render={() => <Jewelry cart={cart} />} />
        <Route
          exact
          path="/Cosmetics"
          render={() => <Cosmetics cart={cart} />}
        />
        <Route
          exact
          path="/Cart"
          render={() => <Cart cart={cart} removeFromCart={removeFromCart} />}
        />
        <Route
          exact
          path="/:id"
          render={() => <Product cart={cart} addToCart={addToCart} />}
        />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
