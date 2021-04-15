import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App.js";
import Apparel from "./Apparel.js";
import Jewelry from "./Jewelry.js";
import Cosmetics from "./Cosmetics.js";
import Product from "./Product.js";
import Cart from "./Cart.js";
import Catalog from "./components/catalog.json";
//import pages

const Routes = () => {
  let cart = [];

  const addToCart = (item, qty) => {
    const prod = Catalog.filter(e => e.image === item[0].image);

    if (cart.find(e => e.image === prod[0].image)) {
      //if item is already in the cart, this changes just the quantity
      let newProd = [...cart];
      let prodIndex = cart.findIndex(e => e.image === prod[0].image);

      newProd[prodIndex] = {...newProd[prodIndex], quant: qty.current};

      cart = newProd;
    } else {
      //if item isn't in the cart, this adds it
      prod[0].cart = true;
      prod[0].quant = qty.current;
      cart.push(prod[0])
    }
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/Apparel" component={Apparel} />
        <Route exact path="/Jewelry" component={Jewelry} />
        <Route exact path="/Cosmetics" component={Cosmetics} />
        <Route exact path="/Cart" render={() => (
          <Cart cart={cart} />
        )} />
        <Route exact path="/:id" render={() => (
          <Product addToCart={addToCart} />
        )} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;


/**
 * home page can be App
 * import Cart & Product
 * 
 * 
 * omg i've made a mess
 */