import React from 'react';
import { Button, Form, Input, Label } from 'reactstrap';
import { registerUser } from '../services/api';

class RegisterPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }
    
    handleChange = (event) => {
        var nam = event.target.name
        var val = event.target.value
        this.setState({[nam]: val})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        registerUser(user).then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <div className="container" style={{ fontSize: '16px' }}>

                <Form onSubmit={this.handleSubmit} style={{width: '600px', padding: '15px', backgroundColor: 'white'}}>
                    <h2 className="col text-center">Registeration Page</h2><br />
                    <Label htmlFor="name">Name:</Label>
                    <Input
                    type="text"
                    onChange={this.handleChange}
                    placeholder="Enter your name"
                    name="name"
                    ></Input>
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
                    placeholder="Enter new password"
                    ></Input>
                    <br/>

                    <Button type="submit" className="btn btn-primary">Register</Button>
                </Form>
                <br/>
            </div>
        );
    }
}

export default RegisterPage;