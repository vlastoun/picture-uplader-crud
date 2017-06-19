import React from 'react';
import { shallow } from 'enzyme';

import Test from '../index';

describe('<Test />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <Test id={id} />,
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <Test>{children}</Test>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
