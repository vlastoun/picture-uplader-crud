import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CategoriesForm from 'components/CategoriesForm';
import Button from 'components/Button';
import { makeSelectCategoryEdit, makeSelectError, makeSelectCategories } from './selectors';
import { CLOSE_CATEGORY,
  CREATE_CATEGORY,
  CREATE_CATEGORY_REQUEST,
  FETCH_CATEGORIES,
 } from './constants';
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function*/
class SignupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  componentWillMount() {
    this.fetchData();
  }
  sendData(data) {
    this.props.onSubmit(data);
  }

  fetchData() {
    this.props.fetchCategories();
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
  fetchCategories: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    close: () => dispatch({ type: CLOSE_CATEGORY }),
    newCategory: () => dispatch({ type: CREATE_CATEGORY }),
    onSubmit: (data) => dispatch({ type: CREATE_CATEGORY_REQUEST, category: data }),
    fetchCategories: () => dispatch({ type: FETCH_CATEGORIES }),
  };
}

const mapStateToProps = createStructuredSelector({
  categoryEdit: makeSelectCategoryEdit(),
  error: makeSelectError(),
  categories: makeSelectCategories(),
});
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
