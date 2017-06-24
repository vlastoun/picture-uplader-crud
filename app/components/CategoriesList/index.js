import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Ul from './Ul';
import DeleteButton from './DeleteButton';

const buttonStyle = {
  margin: '0.5em',
};

const cardStyle = {
  margin: '1em',
};

class CategoriesList extends React.Component {
  componentWillMount() {
    this.props.fetch();
  }
  /* eslint-disable react/jsx-boolean-value */
  render() {
    const listItems = this.props.items.map((item) => //eslint-disable-line
      <Card style={cardStyle} key={item.id}>
        <CardHeader title={item.name} actAsExpander={true} showExpandableButton={true} />
        <CardText expandable={true}>
          {item.description}
        </CardText>
        <CardActions>
          <FlatButton style={buttonStyle}>Edit</FlatButton>
          <DeleteButton style={buttonStyle} delete={this.props.delete} post={item} />
        </CardActions>
      </Card>
    );
    return (
      <Paper>
        {this.props.visibilityState && (listItems.length > 0 ? <Ul>{listItems}</Ul> : <h1>List is empty</h1>)}
      </Paper>
    );
  }
}

CategoriesList.propTypes = {
  visibilityState: PropTypes.bool.isRequired,
  fetch: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
};


export default CategoriesList;
