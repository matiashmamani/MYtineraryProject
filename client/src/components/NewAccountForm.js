import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createNewUser } from '../actions/userAction';
import profilePicEmpty from '../img/profilePicEmpty.png';

class NewAccountForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageFile: [],
            imageURL: profilePicEmpty,        
            username: "",
            password: "",
            email: "",
            firstName: "",
            lastName: "",
            country: "",
            terms: false,
            disabledButton: true
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleForm        = this.handleForm.bind(this);
    }
  
    handleInputChange(event) {

        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        }, () => { this.validateButton() });

    }

    validateButton(){

        if(this.state.terms && this.state.username &&
            this.state.password && this.state.email &&
            this.state.firstName && this.state.lastName &&
            this.state.country){
 
             this.setState({disabledButton: false});
        }else{
             this.setState({disabledButton: true});           
        }

    }

    handleForm(event){
        
        event.preventDefault();
        this.props.createNewUser(this.state);
    }

    handleImageChange = event => {

        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {

            this.setState({
                imageFile: file,
                imageURL: reader.result
            })
        }

        if(file) reader.readAsDataURL(file);
    }

    render() {

        return (
            <div>
                <h3 className="mb-3">Create Account</h3>
                <Form className="w-100 text-center" onSubmit={(e)=>{this.handleForm(e)}}>
                    
                    <Form.Group as={Row} controlId="avatarImg" className="inlineForm text-center">
                        <Col xs={4} className="mx-auto text-center">
                            <Image src={this.state.imageURL} roundedCircle fluid className="mb-3 userImg d-block"/>
                            <input 
                                id= "avatarImgInput"
                                name = "avatarImage"
                                type="file"
                                className="itinText text-center mb-3 d-block"
                                onChange={this.handleImageChange}/>  
                        </Col>
                    </Form.Group> 
                    
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
                        <Col xs={4}>
                            <Form.Control name="country" as="select" value={this.state.country} onChange={this.handleInputChange}>
                                <option value="">Choose...</option>
                                <option value="England">England</option>
                                <option value="France">France</option>
                                <option value="Germany">Germany</option>
                                <option value="Holland">Holland</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Spain">Spain</option>
                                <option value="United States">United States</option>
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
                            <span className="itinText">I agree to MYtinerary's <Link to='#'>Terms & Conditions</Link></span>
                        </Form.Label>
                    </Form.Group>  

                    <Button variant="primary" type="submit" name="submitBtn" disabled={this.state.disabledButton}>
                        OK
                    </Button>

                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      //city: state.city
    }  
}
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({createNewUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAccountForm);