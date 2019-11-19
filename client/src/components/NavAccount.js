import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class NavAccount extends React.Component{
    render(){
        return (
            <div>
                <p>Want to build your own MYtinerary?</p>
                <nav>  
                    <Link className="App-link" to="./Login">Log In </Link>
                    <Link className="App-link" to="./SignUp">Create Account</Link>
                </nav>
            </div>
        );
    }
}

export default NavAccount;