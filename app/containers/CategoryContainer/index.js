import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CategoriesForm from 'components/CategoriesForm';
import Button from 'components/Button';
import CategoriesList from 'components/CategoriesList';

import {
  makeSelectCategoryEdit,
  makeSelectError,
  makeSelectCategories,
  makeSelectShowDetails,
} from './selectors';

import { CLOSE_CATEGORY,
  CREATE_CATEGORY,
  CREATE_CATEGORY_REQUEST,
  FETCH_CATEGORIES,
  SHOW_HIDE,
  REQUEST_DELETE,
 } from './constants';


/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function*/
class SignupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
    this.showHide = this.showHide.bind(this);
  }
  sendData(data) {
    this.props.onSubmit(data);
  }

  showHide() {
    this.props.showHide(this.props.expandDetails);
  }

  render() {
    return (
      <div>
        <Button onClick={this.props.newCategory}>New category</Button>
        <Button onClick={this.showHide}>Show/Hide categories</Button>
        <CategoriesForm
          visibilityState={this.props.categoryEdit}
          close={this.props.close}
          sendData={this.sendData}
          categoriesError={this.props.error}
        />
        <CategoriesList
          items={this.props.categories} //eslint-disable-line
          fetch={this.props.fetchCategories}
          delete={this.props.delete}
          visibilityState={this.props.expandDetails}
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
  expandDetails: PropTypes.bool.isRequired,
  showHide: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    close: () => dispatch({ type: CLOSE_CATEGORY }),
    newCategory: () => dispatch({ type: CREATE_CATEGORY }),
    onSubmit: (data) => dispatch({ type: CREATE_CATEGORY_REQUEST, category: data }),
    fetchCategories: () => dispatch({ type: FETCH_CATEGORIES }),
    showHide: (state) => dispatch({ type: SHOW_HIDE, expandDetails: !state }),
    delete: (id) => dispatch({ type: REQUEST_DELETE, id }),
  };
}

const mapStateToProps = createStructuredSelector({
  categoryEdit: makeSelectCategoryEdit(),
  error: makeSelectError(),
  categories: makeSelectCategories(),
  expandDetails: makeSelectShowDetails(),
});
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
