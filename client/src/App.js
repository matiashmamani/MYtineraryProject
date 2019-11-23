import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Router from './components/Router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  render(){
    return (
    <div className="App">
      <Provider store={store}>
        <Router/>
      </Provider>
    </div>
    );
  }
}

export default App;
