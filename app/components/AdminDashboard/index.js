import React from 'react';
import PropTypes from 'prop-types';
import AdminHeader from 'components/AdminHeader';
import Form from 'components/Form';
import Script from 'react-load-script';
import { CLOUDI_PRESET, CLOUDI_NAME, API_KEY } from './../../../keys';

const SCRIPT_URL = '//widget.cloudinary.com/global/all.js';
/* eslint-disable react/prefer-stateless-function */
class DashBoard extends React.Component {
  uploadWidget() {
    cloudinary.openUploadWidget({//eslint-disable-line
      cloud_name: CLOUDI_NAME,
      upload_preset: CLOUDI_PRESET,
      api_key: API_KEY,
    },
      (error, result) => {
          console.log(result);//eslint-disable-line
      });
  }
  render() {
    return (
      <div>
        <AdminHeader logout={this.props.logout} />
        <Form mainPage>
          <Script url={SCRIPT_URL} />
          <button onClick={this.uploadWidget}>Upload image</button>
        </Form>
      </div>
    );
  }
}
DashBoard.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default DashBoard;
