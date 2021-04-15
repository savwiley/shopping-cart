import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App.js";
import Apparel from "./Apparel.js";
import Jewelry from "./Jewelry.js";
import Cosmetics from "./Cosmetics.js";
import Product from "./Product.js";
import Cart from "./Cart.js";
//import pages

const Routes = () => {
  let list = [];

  const addToCart = (item, qty) => {
    list.push({
      product: item[0].product, 
      price: item[0].price,
      image: item[0].image,
      link: item[0].link,
      quant: qty.current
    })
    console.log(list);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/Apparel" component={Apparel} />
        <Route exact path="/Jewelry" component={Jewelry} />
        <Route exact path="/Cosmetics" component={Cosmetics} />
        <Route exact path="/Cart" render={() => (
          <Cart list={list} />
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