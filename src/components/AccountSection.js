import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class AccountSection extends React.Component{
    render(){
        return (
            <div>
                <p>Want to build your own MYtinerary?</p>

                <ul>
                    <li><Link className="App-link" to="./Login">Log In </Link></li>
                    <li><Link className="App-link" to="./SignUp">Create Account</Link></li>
                </ul>

            </div>
        );
    }
}

export default AccountSection;