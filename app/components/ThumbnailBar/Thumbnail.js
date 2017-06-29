import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete-forever';
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */

const Img = styled.img`
  marginTop: 10px;
  list-style-type: none;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
`;
const Div = styled.div`
  float:left;
`;

const ButtonStyle = {
  float: 'left',
};

class Thumbnail extends React.Component {
  constructor() {
    super();
    this.pictureDelete = this.pictureDelete.bind(this);
  }
  pictureDelete() {
    this.props.imageDelete(this.props.public_id);
  }
  render() {
    return (
      <Div>
        <IconButton style={ButtonStyle} onTouchTap={this.pictureDelete}>
          <Delete />
        </IconButton>
        <Img src={this.props.thumbnail_url} alt={this.props.original_filename} height="60" ></Img>
      </Div>
    );
  }
}

Thumbnail.propTypes = {
  thumbnail_url: PropTypes.string.isRequired,
  original_filename: PropTypes.string.isRequired,
  public_id: PropTypes.string.isRequired,
  imageDelete: PropTypes.func.isRequired,
};
export default Thumbnail;
