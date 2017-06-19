import React from 'react';
import { shallow } from 'enzyme';

import InputHeader from '../InputHeader';

describe('<InputHeader />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <InputHeader id={id} />,
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <InputHeader>{children}</InputHeader>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
