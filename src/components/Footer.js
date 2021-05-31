import styled from "@emotion/styled";

const StyledFooter = styled.div`
  text-align: center;
  padding: 20px;
  background: #fff3dc;
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
