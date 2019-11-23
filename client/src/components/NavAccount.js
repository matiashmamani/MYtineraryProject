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
                    <ButtonToolbar className='NavAccount-btn-toolbar'>
                        <Link to='./login' className='NavAccount-btn-left'>
                            <Button variant='primary' size='sm' block>
                                Log In
                            </Button>
                        </Link>
                        <Link to='./signup' className='NavAccount-btn-right'>
                            <Button variant='primary' size='sm' block>
                                Create Account
                            </Button>
                        </Link>
                    </ButtonToolbar>
                </div>
            </div>
        );
    }
}

export default NavAccount;