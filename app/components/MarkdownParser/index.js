import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import marksy from 'marksy';
/* eslint-disable */
const compile = marksy({
  // Pass in whatever creates elements for your
  // virtual DOM library. h('h1', {})
  createElement,

  // You can override the default elements with
  // custom VDOM trees
  elements: {
    h1 ({id, children}) {
      return <h1>{children}</h1>;
    },
  }
})
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
class MarkdownParser extends React.Component {
  render() {
    let displayData;
    if (this.props.data) {
      displayData = this.props.data;
    } else {
      displayData = '';
    }
    const compiled = compile(displayData).tree;
    return (
      <div>
        {compiled}
      </div>
    );
  }
}

MarkdownParser.propTypes = {
  data: PropTypes.string.isRequired,
};
export default MarkdownParser;
