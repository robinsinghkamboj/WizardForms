const validate = (values) => {
  const errors = {};
  if (!values.fullname) {
    errors.fullname = 'Name Required';
  }

  if (!values.companyid) {
    errors.companyid = 'Please select option';
  }

  if (!values.placeid) {
    errors.placeid = 'Please select option';
  }

  if (!values.email) {
    errors.email = 'Email Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  
  if (!values.mobile) {
    errors.mobile = 'MobileNumber Required';
  } else if (values.mobile && !/^([6-9]\d{9})$/i.test(values.mobile)) {
    errors.mobile = 'Invalid mobile number, must be 10 digits';
  }

  if (!values.address) {
    errors.address = 'Address Required';
  }

  return errors;
};

export default validate;
