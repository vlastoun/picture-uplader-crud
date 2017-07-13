import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
class ThumbnailBar extends React.Component {
  render() {
    const images = this.props.images;
    const listItems = images.map((image, i) =>
      <Thumbnail
        key={i}
        thumbnail_url={image.thumbnail_url}
        public_id={image.public_id}
        original_filename={image.original_filename}
        url={image.url}
        showPicture={this.props.showPicture}
      />
    );

    return (
      <div>
        <h3>Galerie</h3>
        {listItems}
      </div>
    );
  }
}

ThumbnailBar.propTypes = {
  images: PropTypes.array.isRequired,
  showPicture: PropTypes.func.isRequired,
};
export default ThumbnailBar;
