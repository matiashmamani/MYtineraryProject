import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class NewAccountForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          terms: false,
          username:"",
          password:"",
          email:"",
          firstName:"",
          lastName:"",
          isButtonDisabled: true

        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {

        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    
        console.log('log')
        console.log(this.state.username)
        console.log(this.state.username)

        if(this.state.terms && this.state.username && this.state.password &&
            this.state.email && this.state.firstName && this.state.lastName){

            this.setState({
                isButtonDisabled: false
            });
        }

        
    }


    handleForm(e){
        // if(
        //     !this.state.terms ||
        //     this.state.username ==="" ||
        //     this.state.password ==="" ||
        //     this.state.email ==="" ||
        //     this.state.firstName ==="" ||
        //     this.state.lastName ==="" 
        // ){
        //     e.preventDefault()
        // }
        // e.preventDefault();
        
        // fetch('somewhere/over/rainbow').then((res)=>{
        //     return res.json();
        // }).then((data)=>{
        //     console.log(data)
        // })
    }

    render() {
        return (
            <div>
                <h1>Create Account</h1>
                <br></br>
                <Form>
                    <Form.Group as={Row} controlId="username" className="inlineForm">
                        <Form.Label column xs={3} className="ml-3"><span className="itinText font-weight-bold">Username:</span></Form.Label>
                        <Col xs={3}>
                            <input
                                className="col-xs-4 text-right"
                                name="username"
                                type="text"
                                value={this.state.username}
                                onChange={this.handleInputChange} />
                        </Col>
                    </Form.Group> 
                    <Form.Group as={Row} controlId="password" className="inlineForm">
                        <Form.Label column xs={3} className="ml-3"><span className="itinText font-weight-bold">Password:</span></Form.Label>
                        <Col xs={3}>
                            <input
                                className="col-xs-4 text-right"
                                name="password"
                                type="text"
                                value={this.state.password}
                                onChange={this.handleInputChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="email" className="inlineForm">
                        <Form.Label column xs={3} className="ml-3"><span className="itinText font-weight-bold">Email:</span></Form.Label>
                        <Col xs={3}>
                            <input
                                className="col-xs-4 text-right"
                                name="email"
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInputChange} />
                        </Col>
                    </Form.Group>     
                    <Form.Group as={Row} controlId="firstName" className="inlineForm">
                        <Form.Label column xs={3} className="ml-3"><span className="itinText font-weight-bold">First Name:</span></Form.Label>
                        <Col xs={3}>
                            <input
                                className="col-xs-4 text-right"
                                name="firstName"
                                type="text"
                                value={this.state.firstName}
                                onChange={this.handleInputChange} />
                        </Col>
                    </Form.Group> 
                    <Form.Group as={Row} controlId="lastName" className="inlineForm">
                        <Form.Label column xs={3} className="ml-3"><span className="itinText font-weight-bold">Last Name:</span></Form.Label>
                        <Col xs={3}>
                            <input
                                className="col-xs-4 text-right"
                                name="lastName"
                                type="text"
                                value={this.state.lastName}
                                onChange={this.handleInputChange} />
                        </Col>
                    </Form.Group>  
                    
                    <Form.Group as={Row} controlId="country" className="inlineForm">
                        <Form.Label column xs={3} className="ml-3"><span className="itinText font-weight-bold">Country:</span></Form.Label>
                        <Col xs={3}>
                            <Form.Control name="country" as="select">
                                <option>Choose...</option>
                                <option>England</option>
                                <option>France</option>
                                <option>Germany</option>
                                <option>Holland</option>
                                <option>Ireland</option>
                                <option>Spain</option>
                                <option>USA</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group>
                        <input
                            className="col-xs-4 text-right"
                            name="terms"
                            type="checkbox"
                            checked={this.state.terms}
                            onChange={this.handleInputChange} />
                        <Form.Label column xs={10} className="ml-3 text-left">
                            <span className="itinText">I agree to MYtinerary's <Link to='./'>Terms & Conditions</Link></span>
                        </Form.Label>
                    </Form.Group>  

                    <Button variant="primary" type="submit" name="submitBtn" disabled={this.state.isButtonDisabled}>
                        OK
                    </Button>

                </Form>
            </div>
        );
    }
}
export default NewAccountForm;