import React from 'react';
import '../App.css';

class AccountSection extends React.Component{
    render(){
        return (
            <div>
                <p>Want to build your own MYtinerary?</p>
                <a
                    className="App-link"
                    href="#"
                >
                    Log in
                </a>
                <br></br>
                <a
                    className="App-link"
                    href="#"
                >
                    Create Account
                </a>
            </div>
        );
    }
}

export default AccountSection;