import styled from "@emotion/styled";
import colors from './colors'

const Detail = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;
  .card {
    background: rgb(126 202 156 / 74%);
    border-radius: 50px;
    padding: 4px 20px;
    text-transform: capitalize;
    margin: 4px 10px 4px 0;
    font-size: 0.9em;
    line-height: 1.5em;
    font-weight: 700;
    &.type {
      background: ${colors.orange}
    }
`;

export default Detail;
