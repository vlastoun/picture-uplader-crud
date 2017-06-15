const validate = (input) => {
  const errors = {};
  const values = input.toJS();
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = 'Passwords do not match';
  }
  return errors;
};

export default validate;
