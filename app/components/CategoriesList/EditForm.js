import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import InputField from 'components/InputField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import validate from './validate';
import asyncValidate from './asyncValidate';
import { selectActiveCategory } from './selectors';
/* eslint-disable jsx-a11y/label-has-for */

const cardStyle = {
  margin: '1em',
};
const buttonStyle = {
  margin: '0.5em',
};

class CategoriesForm extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose() {
  }
  render() {
    const { sendData, handleSubmit, submitting, categoriesError, item } = this.props; //eslint-disable-line
    const name = (
      <Field
        name="name"
        type="text"
        component={InputField}
        label="Name"
      />);
    const description = (
      <Field
        name="description"
        type="text"
        component={InputField}
        label="Description"
      />);
    const Form = (
      <form onSubmit={handleSubmit(sendData)}>
        <Card style={cardStyle}>
          <CardTitle
            title={name}
          />
          <CardText>
            {description}
          </CardText>
          <CardActions >
            <RaisedButton type="submit" disabled={submitting} style={buttonStyle}>
              Submit
            </RaisedButton>
            <RaisedButton type="button" disabled={submitting} onClick={this.props.close} secondary style={buttonStyle}>
              Close
            </RaisedButton>
          </CardActions>
        </Card>
      </form>
    );
    return (
      <div>
        {Form}
      </div>
    );
  }
}

CategoriesForm.propTypes = {
  close: PropTypes.func.isRequired,
};

/* eslint-disable no-class-assign */
CategoriesForm = reduxForm({
  form: 'editForm', // a unique identifier for this form
  validate,
  asyncValidate,
  asyncBlurFields: ['name'],
})(CategoriesForm);

const mapStateToProps = createStructuredSelector({
  initialValues: selectActiveCategory(),
});// You have to connect() to any reducers that you wish to connect to yourself
CategoriesForm = connect(mapStateToProps, null)(CategoriesForm);

export default CategoriesForm;
