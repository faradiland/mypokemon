import styled from "@emotion/styled";
import colors from "./colors";

const StyledPageTitle = styled.div`
  font-size: 1.5em;
  text-align: center;
  .nav {
    color: ${colors.blue};
    font-weight: bold;
  }
  // display: grid;
  // grid-template-columns: repeat(8, 1fr);
  // margin: 0 0 10px;
  // text-align: center;
  // .nav {
  //   margin: 0 0 20px;
  //   background: #fff;
  //   color: #222;
  //   border: 2px solid #222;
  //   box-shadow: 0.3rem 0.3rem 0 #222;
  //   grid-column: span 8;
  //   font-size: 1.2em;
  //   padding: 10px;
  // }
`;

const PageTitle = ({title}) => {
  return (
    <StyledPageTitle>
      <div className='nav'>{title}</div>
    </StyledPageTitle>
  );
};

export default PageTitle;
