import React from 'react';
import PropTypes from 'prop-types';
import AdminHeader from 'components/AdminHeader';
import Form from 'components/Form';
import Script from 'react-load-script';
import CategoryContainer from 'containers/CategoryContainer';
import Button from 'components/Button';

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
        <AdminHeader logout={this.props.logout} />
        <Form mainPage>
          <Script url={SCRIPT_URL} />
          <Button>New post</Button>
        </Form>
        <Form mainPage>
          <CategoryContainer
            createNewCategory={this.props.newCategory}
          />
        </Form>
      </div>
    );
  }
}
DashBoard.propTypes = {
  logout: PropTypes.func.isRequired,
  newCategory: PropTypes.func.isRequired,
};

export default DashBoard;
