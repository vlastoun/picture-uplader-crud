import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import CategoriesForm from 'components/CategoriesForm';
import Span from 'components/Span';
import Form from 'components/Form';
import CategoriesList from 'components/CategoriesList';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import EditForm from 'components/CategoriesList/EditForm';
import {
  makeSelectCategoryEdit,
  makeSelectError,
  makeSelectCategories,
  makeSelectShowDetails,
  makeSelectEraseModal,
  selectCategoryToDelete,
  selectActiveCategory,
  getEditModalState,
} from './selectors';

import { CLOSE_CATEGORY,
  CREATE_CATEGORY,
  CREATE_CATEGORY_REQUEST,
  FETCH_CATEGORIES,
  SHOW_HIDE,
  REQUEST_DELETE,
  HIDE_MODAL,
  DELETE_CATEGORY,
  EDIT_CATEGORY_REQUEST,
  EDIT_CATEGORY,
  HIDE_EDIT_MODAL,
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
/* eslint-disable react/jsx-boolean-value */
  render() {
    const paperStyle = {
      padding: '2em',
    };
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.closeModal}
        keyboardFocused={true}
      />,
      <RaisedButton
        label="Delete"
        secondary={true}
        onTouchTap={this.handleDeleteCategory}
      />,
    ];
    return (
      <Form mainPage bottomPadding>
        {this.props.showConfirmDialog &&
          <Dialog
            title="Delete category?"
            open={this.props.showConfirmDialog}
            onRequestClose={this.props.closeModal}
            actions={actions}
          >
            Are you sure to delete
            {<Span> {this.props.postToDelete.name}</Span>}
            ?
          </Dialog>
        }
        {this.props.editModal &&
          <Dialog
            title="Edit category:"
            open={this.props.editModal}
            onRequestClose={this.props.editModalClose}
          >
            <EditForm close={this.props.editModalClose} sendData={this.props.editCategoryRequest} />
          </Dialog>
        }
        <Paper style={paperStyle} >
          <div>
            <h1>Categories</h1>
          </div>
          <CategoriesForm
            visibilityState={this.props.categoryEdit}
            close={this.props.close}
            sendData={this.sendData}
            categoriesError={this.props.error}
            newCategory={this.props.newCategory}
          />
          <CategoriesList
            items={this.props.categories} //eslint-disable-line
            fetch={this.props.fetchCategories}
            delete={this.props.delete}
            edit={this.props.editCategory}
            visibilityState={this.props.expandDetails}
            activeCategory={this.props.activeCategory}
          />
        </Paper>
      </Form>
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
  editCategory: PropTypes.func.isRequired,
  activeCategory: PropTypes.object,
  editModal: PropTypes.bool.isRequired,
  editModalClose: PropTypes.func.isRequired,
  editCategoryRequest: PropTypes.func.isRequired,
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
    editCategory: (props) => dispatch({ type: EDIT_CATEGORY, props }),
    editModalClose: () => dispatch({ type: HIDE_EDIT_MODAL }),
    editCategoryRequest: (data) => dispatch({ type: EDIT_CATEGORY_REQUEST, category: data }),
  };
}

const mapStateToProps = createStructuredSelector({
  categoryEdit: makeSelectCategoryEdit(),
  error: makeSelectError(),
  categories: makeSelectCategories(),
  expandDetails: makeSelectShowDetails(),
  showConfirmDialog: makeSelectEraseModal(),
  postToDelete: selectCategoryToDelete(),
  activeCategory: selectActiveCategory(),
  editModal: getEditModalState(),
});
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
