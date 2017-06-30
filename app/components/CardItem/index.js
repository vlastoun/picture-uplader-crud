import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

const buttonStyle = {
  margin: '0.5em',
};
const cardStyle = {
  marginTop: '1em',
  marginBottom: '1em',
};
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-boolean-value */
class CategoryCard extends React.Component {
  constructor() {
    super();
    this.state = { edit: false, shadow: 1 };
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }
  onMouseOver = () => { this.setState({ shadow: 3 }); }
  onMouseOut = () => { this.setState({ shadow: 1 }); }
  render() {
    const { item } = this.props;
    return (
      <Card
        style={cardStyle}
        zDepth={this.state.shadow}
        onMouseOver={this.onMouseOver}
        onFocus={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        onBlur={this.onMouseOut}
      >
        <CardTitle
          title={item.title}
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
            id={item.id}
            title={item.title}
          />
        </CardActions>
      </Card>
    );
  }
}

CategoryCard.propTypes = {
  delete: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};
export default CategoryCard;
