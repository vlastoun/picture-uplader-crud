
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import React from 'react';
import PropTypes from 'prop-types';
import InputField from 'components/InputField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import validate from './validate';
import asyncValidate from './asyncValidate';
/* eslint-disable jsx-a11y/label-has-for */
const cardStyle = {
  marginTop: '1em',
  marginBotom: '1em',
};
const buttonStyle = {
  margin: '0.5em',
};


class CategoriesForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
        multiLine
        rows={2}
      />);
    const Form = (
      <form onSubmit={handleSubmit(sendData)}>
        <Card style={cardStyle} zDepth={3} >
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
        {
        this.props.visibilityState
         ? Form
         : <FlatButton onTouchTap={this.props.newCategory} primary>New category</FlatButton>
        }
      </div>
    );
  }
}

CategoriesForm.propTypes = {
  close: PropTypes.func.isRequired,
  visibilityState: PropTypes.bool.isRequired,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  sendData: PropTypes.func.isRequired,
  categoriesError: PropTypes.object,
  newCategory: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'CategoriesForm', // a unique identifier for this form
  validate,
  asyncValidate,
  asyncBlurFields: ['name'],
})(CategoriesForm);
