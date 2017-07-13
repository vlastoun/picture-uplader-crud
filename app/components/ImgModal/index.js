import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styled from 'styled-components';
import Button from 'components/Button';
/* eslint-disable react/prefer-stateless-function */
const ButtonDiv = styled.div`
  margin-bottom: 10px;
`;
const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
class ImgModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    const Img = styled.img`
      justify: center;
      max-height: ${this.state.height * 0.9}px;
      max-width: 100%;
      object-fit: cover;
    `;
    return (
      <Modal
        isOpen={this.props.modalState}
        onRequestClose={this.props.hideModal}
        style={modalStyle}
      >
        <div>
          <ButtonDiv>
            <Button onClick={this.props.hideModal}>Zavřít</Button>
          </ButtonDiv>
          <div>
            <Img src={this.props.pictureURL} />
          </div>
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
