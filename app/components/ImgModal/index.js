import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-awesome-modal';
import styled from 'styled-components';
import Button from 'components/Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden
`;
const Img = styled.img`
  bject-fit: cover;
  min-width: 100%;
  min-height: 100%  
`;
const ButtonDiv = styled.div`
  margin: 10px;
`;
/* eslint-disable react/prefer-stateless-function */
class ImgModal extends React.Component {
  render() {
    return (
      <Modal
        visible={this.props.modalState}
        effect="fadeInUp"
        onClickAway={this.props.hideModal}
        width="90%"
        height="90%"
      >
        <div>
          <ButtonDiv>
            <Button onClick={this.props.hideModal}>Zavřít</Button>
          </ButtonDiv>
          <Wrapper>
            <Img src={this.props.pictureURL} />
          </Wrapper>
        </div>
      </Modal>
    );
  }
}

ImgModal.propTypes = {
  modalState: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  pictureURL: PropTypes.string.isRequired,
};
export default ImgModal;
