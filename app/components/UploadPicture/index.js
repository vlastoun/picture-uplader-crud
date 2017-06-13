import React from 'react';
import axios from 'axios';
import FileButton from './FileButton';
import Input from './Input';
import Thumbnail from './Thumbnail';

/* eslint-disable react/prefer-stateless-function */
class UploadPicture extends React.Component {

  handleImageChange(e) {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    const postId = 1;
    const url = 'http://localhost:8080/api/pictures/upload';
    /* eslint-disable quote-props */
    const config = { headers: {
      'postId': { postId },
      'Content-Type': 'multipart/form-data',
    } };
    axios.post(url, formData, config)
    .then((response) => this.setState({ thumbnail: response.data.status[0].urlThumbnail }));
  }

  render() {
    return (
      <div>
        <form>
          <Thumbnail>test</Thumbnail>
          <FileButton>test<Input
            type="file"
            onChange={(e) => this.handleImageChange(e)}
          /></FileButton>
        </form>
      </div>
    );
  }
}

export default UploadPicture;
