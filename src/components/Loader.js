import styled from "@emotion/styled";
import pokeball from "../assets/pokeball.png";

const StyledLoader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  > img {
    width: 80px;
    animation:spin 0.75s linear infinite;
    @keyframes spin { 50% { -webkit-transform: rotate(180deg) scale(2); transform:rotate(180deg) scale(2); } 100% { -webkit-transform: rotate(360deg) scale(1); transform:rotate(360deg) scale(1); }  }
  }
`;

const Loader = () => {
  return (
    <StyledLoader>
      <img src={pokeball} alt='pokeball' />
    </StyledLoader>
  );
};

export default Loader;
