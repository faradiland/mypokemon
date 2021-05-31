import styled from "@emotion/styled";
import { useLocation, useHistory } from "react-router-dom";
import logo from "../assets/pokemon-logo.svg";
import arrow from "../assets/left.svg";
import colors from "./colors";

const StyledNavbar = styled.div`
  padding: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100px;
    @media(max-width:768px) {
      height: 90px;
    }
    @media(max-width:450px) {
      height: 70px;
    }
    span {
      font-weight: 700;
      font-size: 1.4em;
      color: ${colors.blue};
      @media(max-width:768px) {
        display: none;
      }
    }
    .arrow {
      height: calc(100px - 65px);
      @media(max-width:768px) {
        height: 50px;
      }
      @media(max-width:450px) {
        height: 40px;
      }
      &.rotate {
        transform: rotate(180deg)
      }
    }
    .list {
      height: calc(100px - 65px);
      @media(max-width:768px) {
        height: 50px;
      }
      @media(max-width:450px) {
        height: 40px;
      }
    }
    &:hover {
      color: #1d2c5e;
      transition: all 0.2s ease;
    }
  }
  .logo {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    height: 100px;
    @media(max-width:768px) {
      height: 90px;
    }
    @media(max-width:450px) {
      height: 70px;
    }
  }
`;

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();
  let url = location.pathname;

  return (
    <StyledNavbar >
      {url !== '/' &&
        <div className='nav' onClick={() => history.push('/')}>
          <img src={arrow} alt="arrow" className='arrow' />&nbsp;<span>Pick a Pokemon</span>
        </div>
      }
      <img src={logo} alt="Pokemon" className='logo' onClick={() => history.push('/')}/>
      {url !== '/inventory' &&
        <div className='nav nav2' onClick={() => history.push('/inventory')}>
          <span>My Pokemon </span>&nbsp;<img src={arrow} alt="arrow" className='arrow rotate' />
        </div>
      }
    </StyledNavbar>
  );
};

export default Navbar;
