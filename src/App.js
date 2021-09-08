import React, { useEffect} from "react"
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect, useRouteMatch} from "react-router-dom";

//pages
import PageNotFound from "./Pages/404/PageNotFound";
import Home from "./Pages/Home/Home";
import { initializeUsers } from "./State/usersReducer";
const App = () => {

  const dispatch = useDispatch();

  useEffect(()=> {
    //
    dispatch(initializeUsers())
  },[dispatch])

  //get id on route
  //const userMatch = useRouteMatch('/users/:id');
  //const userId = userMatch ? userMatch.params.id : null
return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
  );

}
export default App;
