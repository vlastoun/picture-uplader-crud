import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from './Input';
import InputHeader from './InputHeader';
import ErrorMessage from './ErrorMessage';
import TextField from 'material-ui/TextField';
/* eslint-disable react/prefer-stateless-function*/
class InputField extends React.Component {
  render() {
    const { input, label, type, serverError, meta: { error } } = this.props;
    return (
      <TextField
        {...input}
        errorText={serverError || error}
        hintText={label}
        floatingLabelText={label}
        type={type}
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
};


export default InputField;

