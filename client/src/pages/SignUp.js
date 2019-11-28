import React from 'react';
import NewAccountForm from '../components/NewAccountForm';
import Footer from '../components/Footer';

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <NewAccountForm/>
        <Footer/>
      </div>  
    );
  }
}
export default SignUp;