import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class NewAccountForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          terms: false,
          username:"",
          password:"",
          email:"",
          firstName:"",
          lastName:""

        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
    handleForm(e){
        if(
            !this.state.terms ||
            this.state.username =="" ||
            this.state.password =="" ||
            this.state.email =="" ||
            this.state.firstName =="" ||
            this.state.lastName =="" 
        ){
            e.preventDefault()
        }
        e.preventDefault();
        
        // fetch('somewhere/over/rainbow').then((res)=>{
        //     return res.json();
        // }).then((data)=>{
        //     console.log(data)
        // })
    }

    render() {
        return (
            <Form>
                <Form.Group as={Row} controlId="username" className="inlineForm">
                    <Form.Label column xs={3} className="ml-3"><span className="itinText font-weight-bold">Username:</span></Form.Label>
                    <Col xs={8}>
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
                    <Col xs={8}>
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
                    <Col xs={8}>
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
                    <Col xs={8}>
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
                    <Col xs={8}>
                        <input
                            className="col-xs-4 text-right"
                            name="lastName"
                            type="text"
                            value={this.state.lastName}
                            onChange={this.handleInputChange} />
                    </Col>
                </Form.Group>  
                 
                <Button variant="secondary" type="submit" name="submitBtn">
                    OK
                </Button>

            </Form>
        );
    }
}
export default NewAccountForm;