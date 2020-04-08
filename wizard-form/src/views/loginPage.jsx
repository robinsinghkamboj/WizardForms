import React from 'react';
import { Button, Form, Input, Label } from 'reactstrap';
import { authenticateUser } from '../services/api';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            loginFailed: false,
            errorMessage: ''
        }
    }
    
    handleChange = (event) => {
        var nam = event.target.name
        var val = event.target.value
        this.setState({[nam]: val})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var _this = this;
        var user = {
            email: this.state.email,
            password: this.state.password
        }
        authenticateUser(user).then(res => {
            if (!res.success) {
                _this.setState({loginFailed: true})
                _this.setState({errorMessage: res.message})
            }
            else {
                _this.setState({loginFailed: false})
                _this.setState({errorMessage: ''})
                _this.setState({errorMessage: res.message})
                localStorage.setItem('userToken', res.token)
                console.log(res.userData)
            }
        })

        
    }

    render() {
        return (
            <div className="container" style={{ fontSize: '16px' }}>

                <Form onSubmit={this.handleSubmit} style={{width: '600px', padding: '15px', backgroundColor: 'white'}}>
                    <h2 className="col text-center">Login Page</h2><br />

                    { this.state.loginFailed ? <div className="col text-center" style={{color: 'red'}}>{this.state.errorMessage}</div> : null }
                    <br/>

                    <Label htmlFor="name">Email:</Label>
                    <Input
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    placeholder="Enter your email address"
                    ></Input>
                    <br/>

                    <Label htmlFor="name">Password:</Label>
                    <Input
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    placeholder="Enter your password"
                    ></Input>
                    <br/>

                    <Button type="submit" className="btn btn-primary">Login</Button>
                </Form>
                <br/>
            </div>
        );
    }
}

export default LoginPage;