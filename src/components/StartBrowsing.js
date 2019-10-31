import React from 'react';
import circledRight from '../img/circledRight.png';
import '../App.css';

class StartBrowsing extends React.Component{
    render(){
        return (
            <div>
                <p>Start Browsing</p>
                <img src={circledRight} className='App-logo' alt='logo'/>
            </div>
        );
    }
}

export default StartBrowsing;