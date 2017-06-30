import React from 'react';
import axios from 'axios';
import winston from 'winston';
import FileButton from './FileButton';
import Input from './Input';
import Thumbnail from './Thumbnail';
import Img from './Img';

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
class UploadPicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnail: '',
    };
  }

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
    .then((response) => this.setState({ thumbnail: response.data.status[0].urlThumbnail }))
    .catch((err) => winston.log('debug', err));
  }

  render() {
    return (
      <div>
        <form>
          <Thumbnail>{
            this.state.thumbnail === ''
              ? <div>upload Image</div>
              : <Img src={this.state.thumbnail} />
            }</Thumbnail>
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
