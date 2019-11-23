import React from 'react';
import Header from '../components/Header.js';
import StartBrowsing from '../components/StartBrowsing.js';
import NavAccount from '../components/NavAccount.js';
import Footer from '../components/Footer.js';
import '../App.css';

class Landing extends React.Component{
    render(){
      return (
        <div>
            <Header/>
            <StartBrowsing/>
            <NavAccount/>
            <Footer/>
        </div>
      );
    }
  }
  
  export default Landing;