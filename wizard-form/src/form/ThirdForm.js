import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validation/validation';
import FormInput from '../components/FormInput';
import { mobile } from '../validation/normalize';
import {
  Card,
  CardBody,
  Col,
  FormGroup,
} from 'reactstrap';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const ThirdForm = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(true);
  const cancel = () => setPopoverOpen(false)
  const { handleSubmit, pristine, previousPage, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Col xs="12" sm="12">
        <Card className="card-border">
          <CardBody>
            <FormGroup row>
              <Col>
                <Field name="mobile1" type="text" component={FormInput} label="Alternate Mobile No *" inputPlaceHolder="+91" normalize={mobile} />
              </Col>
              <Col >
                <Field name="email1" type="text" component={FormInput} label="Alternate Email address *" inputPlaceHolder="Enter your email address" />
              </Col>
            </FormGroup>
            <div>
              <label htmlFor="isservicecenter">Have own Service Center ?</label>
              <div>
                <Field name="isservicecenter" id="isservicecenter" component="input" type="checkbox" />
              </div>
            </div>
          </CardBody>
          <div style={{ paddingBottom: 30 }}>
            <Button color="primary" className="btn-pill pull-left" onClick={previousPage} style={{ marginLeft: '20px'}}>
            <i className="fa fa-chevron-left" /> Previous
            </Button>

          <Button id="Popover1" type="button" color="primary" className="btn-pill pull-right" style={{ marginRight: '20px'}}> Submit
          </Button>

          <Popover placement="left" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
            <PopoverHeader>Do you want to submit ?</PopoverHeader>
            <PopoverBody> 
              Click 'OK' to submit your form.
              <div className="row">
                <div className="col">
                  <Button className="btn btn-accent" onClick={cancel}>No</Button>
                </div>
                <div className="col">
                  <Button color="primary" className="btn-pill pull-right" type="submit" onClick={handleSubmit} onClickCapture={cancel}
                    style={{ marginRight: '20px' }} disabled={pristine || submitting}>
                    Yes &nbsp;
                    <i className="fa fa-check" />
                  </Button>
                </div>
              </div>
            </PopoverBody>
          </Popover>
      </div>
    </Card>
  </Col>
</form >
);
};

ThirdForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  previousPage: PropTypes.func,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(ThirdForm);