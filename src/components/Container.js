import styled from "@emotion/styled";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 100px;
  @media(max-width: 1024px) {
    padding: 0 50px;
  }
  @media(max-width: 768px) {
    padding: 0 10px;
  }
`;

export default Container;
