import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CategoriesForm from 'components/CategoriesForm';
import Button from 'components/Button';
import { makeSelectCategoryEdit } from './selectors';
import { CLOSE_CATEGORY } from './constants';
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function*/
class SignupContainer extends React.Component {

  render() {
    return (
      <div>
        <Button onClick={this.props.createNewCategory}>New category</Button>
        <CategoriesForm
          visibilityState={this.props.categoryEdit}
          close={this.props.close}
        />
        <p>categories</p>
      </div>
    );
  }
}

SignupContainer.propTypes = {
  categoryEdit: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  createNewCategory: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    close: () => dispatch({ type: CLOSE_CATEGORY }),
  };
}

const mapStateToProps = createStructuredSelector({
  categoryEdit: makeSelectCategoryEdit(),
});
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
