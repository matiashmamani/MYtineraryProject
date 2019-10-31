import React from 'react';
import HeaderLogo from './components/HeaderLogo.js';
import Footer from './components/Footer.js';
import StartBrowsing from './components/StartBrowsing.js';
import AccountSection from './components/AccountSection.js';
import './App.css';

class App extends React.Component{
  render(){
    return (
    <div className="App">
      <body>
        <header className="App-header">
          <HeaderLogo/>
          <h3>
            Find your perfect trip, designed by insiders who know and love their cities.
          </h3>
        </header>
        <StartBrowsing/>
        <AccountSection/>
        <Footer/>
      </body>
    </div>
    );
  }
}

export default App;
