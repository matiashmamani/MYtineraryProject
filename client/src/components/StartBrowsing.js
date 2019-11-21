import React from 'react';
import { Link } from 'react-router-dom';
import circledRight from '../img/circledRight.png';
import '../App.css';

class StartBrowsing extends React.Component{
    render(){
        return (
            <div>
                <p>Start Browsing</p>
                <Link to="./cities">
                    <img src={circledRight} className='App-circle' alt='logo'/>
                </Link>
            </div>
        );
    }
}

export default StartBrowsing;