import React from 'react';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

class Login extends React.Component {
  render() {
    return (
      <div>
        <LoginForm/>
        <Footer/>
      </div>  
    ); 
  }
}
export default Login;