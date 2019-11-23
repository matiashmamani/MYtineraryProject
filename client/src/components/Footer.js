import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../img/homeIcon.png';
import '../App.css';

class Footer extends React.Component{
    render(){
        return (
            <Link to="./">
                <img src={homeIcon} className='Footer-home-icon' alt='home icon'/>
            </Link>
        );
    }
}

export default Footer;