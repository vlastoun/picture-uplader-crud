import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import Ul from './Ul';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import EditForm from './EditForm';

const buttonStyle = {
  margin: '0.5em',
};
const cardStyle = {
  margin: '1em',
};

class CategoriesList extends React.Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.error = this.error.bind(this);
    this.sendData = this.sendData.bind(this);
  }

  componentWillMount() {
    this.props.fetch();
  }
  close() {
    console.log('close');
  }

  error() {
    console.log('error');
  }

  sendData(data) {
    console.log(data.toJS());
  }
  /* eslint-disable react/jsx-boolean-value */

  render() {
    const listItems = this.props.items.map((item) => {
      console.log('listitems')
      if (this.props.activeCategory.id === item.id) {
        return <EditForm item={item} visibilityState={true} key={item.id} />;
      }
      return (
        <Card style={cardStyle} key={item.id}>
          <CardTitle
            title={item.name}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            {item.description}
          </CardText>
          <CardActions expandable={true}>
            <EditButton style={buttonStyle} edit={this.props.edit} post={item}>
              Edit
            </EditButton>
            <DeleteButton
              style={buttonStyle}
              delete={this.props.delete}
              post={item}
            />
          </CardActions>
        </Card>
      );
    });
    return (
      <Paper>
        {listItems.length > 0
          ? <Ul>{listItems}</Ul>
          : <h1 style={cardStyle}>List is empty</h1>}
      </Paper>
    );
  }
}

CategoriesList.propTypes = {
  fetch: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  activeCategory: PropTypes.object,
};

export default CategoriesList;
