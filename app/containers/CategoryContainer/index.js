import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CategoriesForm from 'components/CategoriesForm';
import Button from 'components/Button';
import Span from 'components/Span';
import CategoriesList from 'components/CategoriesList';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';

import {
  makeSelectCategoryEdit,
  makeSelectError,
  makeSelectCategories,
  makeSelectShowDetails,
  makeSelectEraseModal,
  selectCategoryToDelete,
} from './selectors';

import { CLOSE_CATEGORY,
  CREATE_CATEGORY,
  CREATE_CATEGORY_REQUEST,
  FETCH_CATEGORIES,
  SHOW_HIDE,
  REQUEST_DELETE,
  HIDE_MODAL,
  DELETE_CATEGORY,
 } from './constants';


/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function*/
class CategoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
    this.showHide = this.showHide.bind(this);
    this.handleDeleteCategory = this.handleDeleteCategory.bind(this);
  }
  sendData(data) {
    this.props.onSubmit(data);
  }

  showHide() {
    this.props.showHide(this.props.expandDetails);
  }

  handleDeleteCategory() {
    console.log(this.props.postToDelete.id);
    this.props.deleteConfirmed(this.props.postToDelete.id);
  }

  render() {
    return (
      <div>
        {
          this.props.showConfirmDialog &&
          <ModalContainer>
            <ModalDialog onClose={this.props.closeModal}>
              <h1>Are you sure to delete <Span>{this.props.postToDelete.name}</Span>???</h1>
              <Button onClick={this.props.closeModal}>Close</Button>
              <Button onClick={this.handleDeleteCategory}>Delete</Button>
            </ModalDialog>
          </ModalContainer>
        }
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

CategoryContainer.propTypes = {
  categoryEdit: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  newCategory: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  expandDetails: PropTypes.bool.isRequired,
  showHide: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
  showConfirmDialog: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  postToDelete: PropTypes.object,
  deleteConfirmed: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    close: () => dispatch({ type: CLOSE_CATEGORY }),
    newCategory: () => dispatch({ type: CREATE_CATEGORY }),
    onSubmit: (data) => dispatch({ type: CREATE_CATEGORY_REQUEST, category: data }),
    fetchCategories: () => dispatch({ type: FETCH_CATEGORIES }),
    showHide: (state) => dispatch({ type: SHOW_HIDE, expandDetails: !state }),
    delete: (id) => dispatch({ type: REQUEST_DELETE, id }),
    closeModal: () => dispatch({ type: HIDE_MODAL }),
    deleteConfirmed: (id) => dispatch({ type: DELETE_CATEGORY, id }),
  };
}

const mapStateToProps = createStructuredSelector({
  categoryEdit: makeSelectCategoryEdit(),
  error: makeSelectError(),
  categories: makeSelectCategories(),
  expandDetails: makeSelectShowDetails(),
  showConfirmDialog: makeSelectEraseModal(),
  postToDelete: selectCategoryToDelete(),
});
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
