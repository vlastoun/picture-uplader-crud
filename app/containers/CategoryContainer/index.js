import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CategoriesForm from 'components/CategoriesForm';
import Button from 'components/Button';
import { makeSelectCategoryEdit, makeSelectError } from './selectors';
import { CLOSE_CATEGORY, CREATE_CATEGORY, CREATE_CATEGORY_REQUEST } from './constants';
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function*/
class SignupContainer extends React.Component {
  constructor() {
    super();
    this.sendData = this.sendData.bind(this);
  }

  sendData(data) {
    this.props.onSubmit(data);
  }

  render() {
    return (
      <div>
        <Button onClick={this.props.newCategory}>New category</Button>
        <CategoriesForm
          visibilityState={this.props.categoryEdit}
          close={this.props.close}
          sendData={this.sendData}
          categoriesError={this.props.error}
        />
        <p>categories</p>
      </div>
    );
  }
}

SignupContainer.propTypes = {
  categoryEdit: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  newCategory: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    close: () => dispatch({ type: CLOSE_CATEGORY }),
    newCategory: () => dispatch({ type: CREATE_CATEGORY }),
    onSubmit: (data) => dispatch({ type: CREATE_CATEGORY_REQUEST, category: data }),
  };
}

const mapStateToProps = createStructuredSelector({
  categoryEdit: makeSelectCategoryEdit(),
  error: makeSelectError(),
});
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
