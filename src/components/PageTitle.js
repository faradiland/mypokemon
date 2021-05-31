import styled from "@emotion/styled";
import colors from "./colors";

const StyledPageTitle = styled.div`
  font-size: 1.5em;
  text-align: center;
  .nav {
    color: ${colors.blue};
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

const PageTitle = ({title}) => {
  return (
    <StyledPageTitle>
      <div className='nav'>{title}</div>
    </StyledPageTitle>
  );
};

export default PageTitle;
