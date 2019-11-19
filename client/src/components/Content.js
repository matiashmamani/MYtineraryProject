import React from 'react';
import HeaderLogo from './HeaderLogo.js';
import StartBrowsing from './StartBrowsing.js';
import NavAccount from './NavAccount.js';
import Footer from './Footer.js';
import '../App.css';

class Content extends React.Component{
    render(){
      return (
        <div>
            <HeaderLogo/>
            <StartBrowsing/>
            <NavAccount/>
            <Footer/>
        </div>
      );
    }
  }
  
  export default Content;