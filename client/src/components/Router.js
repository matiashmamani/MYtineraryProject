import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Landing from '../pages/Landing';
import Cities from '../pages/Cities';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Itineraries from '../pages/Itineraries.js';

class Router extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/cities" component={Cities} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/itineraries/:cityId" component={Itineraries} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;