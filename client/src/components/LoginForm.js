import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { loginUser } from '../actions/userAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: "",
          remember: false,
          redirect: false,
          disabledButton: true
        };

        this.handleInputChange = this.handleInputChange.bind(this);

    }

    // async loginUser() {
    //     await this.props.dispatch(fetchLogin(this.state));
    //     //validar la res que me viene del back, si no esta ok por user o pass, mostrar mensaje;   
    //     //si esta ok:
    //     console.log('ok')
    //     this.setState({
    //         redirect: true
    //     })
    //     console.log(this.state.redirect)
    //   }

    handleInputChange(event) {

        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        }, () => { this.validateButton() });

    }

    validateButton(){

        if(this.state.username && this.state.password){
             this.setState({disabledButton: false});
        }else{
             this.setState({disabledButton: true});           
        }

    }

     handleForm(event){

        event.preventDefault();
        console.log(this.state)
        //this.props.loginUser(this.state);

    }

    render() { 
        const redirect  = this.state.redirect;
        if (redirect) {
            return <Redirect to={`/profile/${this.props.token}`}/>;
        } else {         
            return (
                <div>
                    <h3 className="mb-4">Login</h3>
                    <Form className="w-100 text-center" onSubmit={(e)=>{this.handleForm(e)}}>

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

                        <Form.Group>
                            <input
                                className="col-xs-4 text-right"
                                name="remember"
                                type="checkbox"
                                checked={this.state.remember}
                                onChange={this.handleInputChange} />
                            <Form.Label column xs={10} className="ml-3 text-left">
                                <span className="itinText">Remember Me</span>
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
}

const mapStateToProps = (state) => {
    return {
      //city: state.city
    }  
}
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loginUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);