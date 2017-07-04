const validate = (input) => {
  const errors = {};
  const values = input.toJS();
  if (!values.oldPassword) {
    errors.oldPassword = 'Required';
  }
  if (!values.newPassword) {
    errors.newPassword = 'Required';
  }
  if (values.passwordConfirmation !== values.newPassword) {
    errors.passwordConfirmation = 'Passwords dont match';
  }
  return errors;
};

export default validate;
