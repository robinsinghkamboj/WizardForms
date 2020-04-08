import React, { Component } from "react";
import { Provider, Subscribe } from "unstated";
import DetailsContainer from "../container/detailsContainer";
import { Button, Card, Input, Form } from 'reactstrap';
import 'animate.css'

class UnStatedExample extends Component {
  render() {
    return (
      <div style={{ textAlign: '-webkit-center' }}>
        <Provider>

          <Subscribe to={[DetailsContainer]}>
            {details => (
              <div className="container ">
                <Form onSubmit={details.handleAddDetails} style={{ width: '800px', backgroundColor: 'white', padding: '20px' }}>
                  <h2 className="'col text-center animated slow flipInX" style={{ color: 'blue' }}>--- Enter Your Details ---</h2>
                  <Input
                    type="text"
                    name="name"
                    value={details.state.name}
                    placeholder="Enter your name"
                    onChange={details.handleInputChange}
                    className="inputDetails form-control animated fadeIn"
                    required
                  />
                  <br />
                  <Input
                    type="email"
                    name="email"
                    value={details.state.email}
                    placeholder="Enter your email address"
                    onChange={details.handleInputChange}
                    className="inputDetails form-control animated slow fadeIn"
                    required
                  />
                  <br />
                  <Button className="submitButton animated infinite slower jackInTheBox" color="primary">Submit</Button>
                </Form>
                <br />
              </div>
            )}
          </Subscribe>
          <br />
          <div className="container">
            <h4 className="animated infinite slow bounce">--- List of users ---</h4>
            <Subscribe to={[DetailsContainer]}>
              {details =>
                details.state.details.map((detail, index) => (
                  <Card className="detailsCard animated fadeInUp" style={{ width: '500px', paddingLeft: '10px', paddingTop: '10px', paddingRight: '10px' }} key={index}>
                    <p>
                      <button className="deleteButton animated infinite pulse" style={{ float: 'right' }} onClick={() => details.handleDeleteDetail(detail)}>
                        X
                    </button>
                      Name: <b>{detail.name}</b> <br />
                      E-mail: <b>{detail.email}</b> &nbsp;&nbsp;&nbsp;&nbsp;
  
                  </p>
                  </Card>
                ))
              }
            </Subscribe>
          </div>

        </Provider>
      </div>
    );
  }
}

export default UnStatedExample;
