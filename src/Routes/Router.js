import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DetailsPageComponent from "../Components/DetailsPageComponent";
import HomePageComponent from "../Components/HomePageComponent";


export default function Routes()
{
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePageComponent />
                </Route>
                <Route path="/details/:id" children={<DetailsPageComponent />}>
                    
                </Route>
            </Switch>
        </Router>
    )
}