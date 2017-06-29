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
};
export default ThumbnailBar;
