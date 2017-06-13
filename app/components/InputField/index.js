import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from './Input';
import InputHeader from './InputHeader';
import ErrorMessage from './ErrorMessage';

const Container = styled.div`
  min-height: 72px;
  position: relative;
  height: auto;
`;
/* eslint-disable react/prefer-stateless-function*/
class InputField extends React.Component {
  render() {
    const { input, label, type, meta: { touched, error, warning, active } } = this.props;
    return (
      <Container>
        {input.value
          ? <InputHeader active={active}>{label}</InputHeader>
          : <InputHeader />
        }
        <Input
          {...input}
          error={error}
          warning={warning}
          placeholder={label}
          type={type}
        />

        {touched && ((error && <ErrorMessage>{error}</ErrorMessage>)
          || (warning && <ErrorMessage>{warning}</ErrorMessage>))}
      </Container>
    );
  }
}

/* eslint-disable react/forbid-prop-types */
InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
};


export default InputField;

