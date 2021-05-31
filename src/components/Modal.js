import styled from "@emotion/styled";
import colors from "./colors"

const StyledModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: ${(props) => props.visible === true ? 1 : 0};
  visibility: ${(props) => props.visible === true ? 'visible' : 'hidden'}
`;
const StyledModal = styled.div`
  width: ${(props) => props.wdt ? props.wdt : '300px'};
  min-height: 100px;
  background: #fff;
  padding: 20px;
  border-radius: 30px;
  position: relative;
  animation: 0.25s opac linear;
  .close-icon {
    position: absolute;
    top: -10px;
    right: 0;
    padding: 20px;
    cursor: pointer;
    &:hover {
      color: ${colors.red}
    }
  }
  .title {
    font-size: 1.3em;
    margin-bottom: 30px;
  }
  @keyframes opac { 0% { opacity: 0 } 100% { opacity: 1 } }
`;

const Modal = ({ children, width, title, icon, visible, onClose }) => {
  return (
    <StyledModalWrapper visible={visible}>
      <StyledModal wdt={width}>
        <div className='title'><b>{title}</b></div>
        <span className='close-icon' onClick={onClose}>&#10006;</span>
        {children}
      </StyledModal>
    </StyledModalWrapper>
  )
};

export default Modal;
