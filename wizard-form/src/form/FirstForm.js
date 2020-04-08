import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validation/validation';
import FormInput from '../components/FormInput'
import { getCompanies, getPlaces } from '../services/api'
import { captialize } from '../validation/normalize';
import { Button, Card, CardBody, Col } from 'reactstrap';

var companies = []
var places = []

// get companies from directus (function in services) -->
getCompanies().then(res => {
  companies = res.data.data;
})

// get places from directus (function in services) -->
getPlaces().then(res => {
  places = res.data.data
})

const renderCompanySelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input} className="form-control">
      <option value="" hidden>--- Select Company ---</option>
      
      {companies.map((comp, index) => (
        <option value={comp.id} key={index}>
          {comp.company_name}
        </option>
      ))}
    </select>
    {touched && error && <span style={{color: 'red'}}>{error}</span>}
  </div>
);

const renderPlaceSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input} className="form-control" style={{ marginTop: 15 }}>
      <option value="" hidden>--- Select Place ---</option>
      {places.map((pla, index) => (
        <option value={pla.id} key={index}>
          {pla.place_name}
        </option>
      ))}
    </select>
    {touched && error && <span style={{color: 'red'}}>{error}</span>}
  </div>
);

const FirstForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className="container">
      <Col sm="12">
        <Card className="card-border">
          <CardBody>
            <Field
              name="fullname"
              type="text"
              component={FormInput}
              label="Dealer Name *"
              inputPlaceHolder="Enter Your Name"
              normalize={captialize}
            />

            <Field name="companyid" component={renderCompanySelector} />

            <Field name="placeid" component={renderPlaceSelector} />

          </CardBody>
          <div style={{ paddingBottom: 30 }}>
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

FirstForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(FirstForm);