import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
class ThumbnailBar extends React.Component {
  render() {
    const listItems = this.props.images.map((image, i) =>
      <Thumbnail
        key={i}
        thumbnail_url={image.thumbnail_url}
        public_id={image.public_id}
        original_filename={image.original_filename}
        imageDelete={this.props.imageDelete}
      />
    );

    return (
      <div>
        {listItems}
      </div>
    );
  }
}

ThumbnailBar.propTypes = {
  images: PropTypes.array.isRequired,
  imageDelete: PropTypes.func.isRequired,
};
export default ThumbnailBar;
