import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "../home";
import UserTodoList from "../userTodoList";

function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route exact path={"/todos/:userId"}>
          <UserTodoList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routers;
