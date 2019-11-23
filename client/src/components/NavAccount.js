import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import '../css/NavAccount.css';

class NavAccount extends React.Component{
    render(){
        return (
            <div>
                <p>Want to build your own MYtinerary?</p>
                <div>
                    <ButtonToolbar>
                        <Button variant="primary" size="sm" block>
                            <Link to="./Login">Log In </Link>
                        </Button>
                        <Button variant="primary" size="sm" block>
                            <Link to="./SignUp">Create Account</Link>
                        </Button>
                    </ButtonToolbar>
                </div>
            </div>
        );
    }
}

export default NavAccount;