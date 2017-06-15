const validate = (input) => {
  const errors = {};
  const values = input.toJS();
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  } else if (values.username.length < 3) {
    errors.username = 'Must be 3 characters or more';
  } else if (!/^[a-zA-Zá-žÁ-Ž0-9_-]{3,15}$/i.test(values.username)) {
    errors.username = 'The password contains forbidden characters';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 5) {
    errors.password = 'Password too short';
  }
  if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = 'Passwords do not match';
  }
  return errors;
};

export default validate;
