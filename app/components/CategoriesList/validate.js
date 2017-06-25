const validate = (input) => {
  const errors = {};
  const values = input.toJS();
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 50) {
    errors.name = 'Must be 50 characters or less';
  } else if (values.name.length < 3) {
    errors.name = 'Must be 3 characters or more';
  }
  return errors;
};

export default validate;
