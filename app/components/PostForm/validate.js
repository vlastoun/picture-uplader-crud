const validate = (input) => {
  const errors = {};
  const values = input.toJS();
  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length > 100) {
    errors.title = 'Must be 50 characters or less';
  } else if (values.title.length < 3) {
    errors.title = 'Must be 3 characters or more';
  }
  if (!values.description) {
    errors.description = 'Required';
  } else if (values.description.length < 3) {
    errors.description = 'Must be 3 characters or more';
  }
  return errors;
};

export default validate;
