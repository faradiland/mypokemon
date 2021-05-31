import styled from "@emotion/styled";

const Title = styled.h1`
  text-transform: capitalize;
  font-size: ${(props) => (props.primary ? "1.8em" : "1.2em")};
`;

export default Title;
