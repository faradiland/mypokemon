import styled from "@emotion/styled";
import colors from "./colors"

const StyledFooter = styled.div`
  text-align: center;
  padding: 20px;
  background: rgb(255 211 182 / 23%);
  // border-top: 1px solid ${colors.orange};
  font-size: 0.8em;
  font-weight: bold;
`;

const Footer = ({ value, width }) => {
  return (
    <StyledFooter>
      faradiland.github.io @ 2021
    </StyledFooter>
  );
};

export default Footer;
