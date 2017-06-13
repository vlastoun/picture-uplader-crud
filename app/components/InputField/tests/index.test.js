/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';

import InputField from '../index';
const props = {
  input: {
    value: 'test'
  },
  label: 'test',
  type: 'text',
  meta: {
    touched: 'false',
    error: '',
    warning: '',
    active: false,
    value:'testvalue'
  },
};


describe('<InputField />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <InputField {...props}  />,
    );
    expect(renderedComponent.prop('label')).toEqual("test");
  });
});
