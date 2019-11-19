import React from 'react';
import logo from '../img/MYtineraryLogo.png';
import '../App.css';

class HeaderLogo extends React.Component{
    render(){
        return (
            <div>
                <img src={logo} className='App-logo' alt='logo'/>
                <p>
                Find your perfect trip, designed by <br/> insiders who know and love their cities.
                </p>
            </div>           
        );
    }
}

export default HeaderLogo;
