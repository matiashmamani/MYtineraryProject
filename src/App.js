import React from 'react';
import HeaderLogo from './components/HeaderLogo.js';
import Footer from './components/Footer.js';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Content from './components/Content.js';
import Cities from './components/Cities';
import SignUp from './components/SignUp';
import Login from './components/Login';
import './App.css';

class App extends React.Component{
  render(){
    return (
    <div className="App">

      <header className="App-header">
        <HeaderLogo/>
        <h3>
          Find your perfect trip, designed by <br/> insiders who know and love their cities.
        </h3>
      </header>

      <Router>
        <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/Cities" component={Cities} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Login" component={Login} />
        </Switch>
      </Router>

      <Footer/>
    </div>
    );
  }
}

export default App;
