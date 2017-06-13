import React from 'react';
import FileButton from './FileButton';
import Input from './Input';

/* eslint-disable react/prefer-stateless-function */
class UploadPicture extends React.Component {
  render() {
    return (
      <div>
        <form>
          <FileButton>test<Input type="file" /></FileButton>
        </form>
      </div>
    );
  }
}

export default UploadPicture;
