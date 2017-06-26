import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

/* eslint-disable react/prefer-stateless-function*/
class InputField extends React.Component {
  render() {
    const { rows, multiLine, input, label, type, serverError, meta: { touched, error } } = this.props;
    return (
      <TextField
        {...input}
        errorText={touched && (serverError || error)}
        floatingLabelText={label}
        placeholder={label}
        type={type}
        rows={rows}
        multiLine={multiLine}
      />
    );
  }
}

/* eslint-disable react/forbid-prop-types */
InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  serverError: PropTypes.array,
  rows: PropTypes.number,
  multiLine: PropTypes.bool,
};


export default InputField;

