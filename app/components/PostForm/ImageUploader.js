import React from 'react';
import PropTypes from 'prop-types';
import Script from 'react-load-script';
import RaisedButton from 'material-ui/RaisedButton';

const SCRIPT_URL = '//widget.cloudinary.com/global/all.js';
const buttonStyle = {
  marginTop: '2em',
};
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
class ImageUploader extends React.Component {
  constructor() {
    super();
    this.uploadWidget = this.uploadWidget.bind(this);
  }
  uploadWidget() {
    cloudinary.openUploadWidget({//eslint-disable-line
      cloud_name: process.env.CLOUDI_NAME,
      upload_preset: process.env.CLOUDI_PRESET,
      api_key: process.env.API_KEY,
    },
      (error, result) => {
        console.log(result);//eslint-disable-line
        this.props.imagesUploaded(result);
      });
  }
  render() {
    return (
      <div>
        <Script url={SCRIPT_URL} />
        <RaisedButton style={buttonStyle} onTouchTap={this.uploadWidget} fullWidth>UploadImages</RaisedButton>
      </div>
    );
  }
}

ImageUploader.propTypes = {
  imagesUploaded: PropTypes.func.isRequired,
};
export default ImageUploader;
