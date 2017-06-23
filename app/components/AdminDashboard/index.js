import React from 'react';
import PropTypes from 'prop-types';
import TabBar from 'containers/TabBar';
import Form from 'components/Form';
import Script from 'react-load-script';
import Button from 'components/Button';

const components = [
  { title: 'cosi1', component: <div>cosi1</div> },
  { title: 'cosi2', component: <div>cosi2</div> },
  { title: 'cosi3', component: <div>cosi3</div> },
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
        <Form mainPage>
          <Script url={SCRIPT_URL} />
          <Button>New post</Button>
        </Form>
      </div>
    );
  }
}
DashBoard.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default DashBoard;
