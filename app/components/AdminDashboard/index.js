import React from 'react';
import PropTypes from 'prop-types';
import TabBar from 'containers/TabBar';
import Script from 'react-load-script';
import CategoryContainer from 'containers/CategoryContainer';

const components = [
  { title: 'Categories', component: <CategoryContainer /> },
  { title: 'Post', component: <div>post</div> },
];

const SCRIPT_URL = '//widget.cloudinary.com/global/all.js';
/* eslint-disable react/prefer-stateless-function */
class DashBoard extends React.Component {
  uploadWidget() {
    cloudinary.openUploadWidget({//eslint-disable-line
      cloud_name: process.env.CLOUDI_NAME,
      upload_preset: process.env.CLOUDI_PRESET,
      api_key: process.env.API_KEY,
    },
      (error, result) => {
          console.log(result);//eslint-disable-line
      });
  }
  render() {
    return (
      <div>
        <TabBar tabs={components} />
        <Script url={SCRIPT_URL} />
      </div>
    );
  }
}
DashBoard.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default DashBoard;
