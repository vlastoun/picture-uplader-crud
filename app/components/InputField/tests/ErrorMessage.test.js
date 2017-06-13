import React from 'react';
import { shallow } from 'enzyme';

import ErrorMessage from '../ErrorMessage';

describe('<ErrorMessage />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <ErrorMessage id={id} />,
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <ErrorMessage>{children}</ErrorMessage>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
