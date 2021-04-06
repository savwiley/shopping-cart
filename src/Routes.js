import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App.js";
//import pages

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;


/**
 * home page can be App
 * import Cart & Product
 */