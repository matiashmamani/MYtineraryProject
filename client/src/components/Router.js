import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Content from './Content.js';
import Cities from './Cities';
import SignUp from './SignUp';
import Login from './Login';
import Itineraries from './Itineraries.js';

class Router extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/Cities" component={Cities} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Login" component={Login} />
            <Route path="/Itineraries" component={Itineraries} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;