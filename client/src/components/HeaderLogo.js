import React from 'react';
import logo from '../img/MYtineraryLogo.png';
import '../App.css';

class HeaderLogo extends React.Component{
    render(){
        return (<img src={logo} className='App-logo' alt='logo'/>);
    }
}

export default HeaderLogo;
