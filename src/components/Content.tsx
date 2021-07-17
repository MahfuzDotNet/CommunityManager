import React from 'react';
import {Route, Switch} from "react-router-dom";
import List from "../pages/ListClubs";
import Create from "../pages/CreateClub";

const Content = () => {
  return(
    <Switch>
      <Route exact path="/">
        <List/>
      </Route>
      <Route path="/create">
        <Create/>
      </Route>
    </Switch>
  )
}

export default Content;
