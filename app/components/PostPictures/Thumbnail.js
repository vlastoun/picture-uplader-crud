import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */

const Img = styled.img`
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  list-style-type: none;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 12px, rgba(0, 0, 0, 0.12) 0px 4px 12px;
    cursor: pointer;
  }
`;
const Div = styled.div`
  float:left;
`;


class Thumbnail extends React.Component {
  constructor() {
    super();
    this.showPicture = this.showPicture.bind(this);
  }
  showPicture() {
    this.props.showPicture(this.props.url);
  }
  render() {
    return (
      <Div onClick={this.showPicture}>
        <Img src={this.props.thumbnail_url} alt={this.props.original_filename} height="60" ></Img>
      </Div>
    );
  }
}

Thumbnail.propTypes = {
  thumbnail_url: PropTypes.string.isRequired,
  original_filename: PropTypes.string,
  showPicture: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};
export default Thumbnail;
