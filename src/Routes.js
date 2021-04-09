import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App.js";
import Apparel from "./Apparel.js";
import Jewelry from "./Jewelry.js";
import Cosmetics from "./Cosmetics.js";
//import pages

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/Apparel" component={Apparel} />
        <Route exact path="/Jewelry" component={Jewelry} />
        <Route exact path="/Cosmetics" component={Cosmetics} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;


/**
 * home page can be App
 * import Cart & Product
 */