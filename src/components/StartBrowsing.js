import React from 'react';
import { Link } from 'react-router-dom';
import circledRight from '../img/circledRight.png';
import '../App.css';

class StartBrowsing extends React.Component{
    render(){
        return (
            <div>
                <p>Start Browsing</p>
                <Link to="./Cities">
                    <img src={circledRight} className='App-logo' alt='logo'/>
                </Link>
            </div>
        );
    }
}

export default StartBrowsing;