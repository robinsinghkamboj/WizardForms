import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validation/validation';
import FormInput from '../components/FormInput';

import {
  Button,
  Card,
  CardBody,
  Col,
} from 'reactstrap';

const SecondForm = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit} className="container">
      <Col sm="12">
        <Card className="card-border">
          <CardBody>

            <Field
              name="email"
              type="email"
              component={FormInput}
              label="Email address *"
              inputPlaceHolder="Enter valid email address"
            />

            <Field
              name="mobile"
              type="number"
              component={FormInput}
              label="Mobile *"
              inputPlaceHolder="Enter contact number"
            />

            <Field
              name="address"
              type="textarea"
              component={FormInput}
              label="Address *"
              inputPlaceHolder="Enter Address"
            />
          </CardBody>
          <div style={{ paddingBottom: 30 }}>
            <Button color="primary" className="btn-pill pull-left" onClick={previousPage} style={{ marginLeft: '20px' }}>
              <i className="fa fa-chevron-left" />
              &nbsp; Previous
            </Button>
            <Button color="primary" className="btn-pill pull-right" type="submit" style={{ marginRight: '20px' }}>
              Next &nbsp;
              <i className="fa fa-chevron-right" />
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

SecondForm.propTypes = {
  handleSubmit: PropTypes.func,
  previousPage: PropTypes.func
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(SecondForm);