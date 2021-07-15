import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../views/home";
import Content from "../views/content";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/content/:identifier" component={Content}></Route>
    </Switch>
  );
};

export default Router;
