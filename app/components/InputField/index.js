/* eslint-disable react/prop-types, jsx-a11y/label-has-for */
import * as React from 'react';

const renderField = ({ input, label, type, meta: {touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);



export default renderField;
