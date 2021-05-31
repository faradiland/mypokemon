import styled from "@emotion/styled";
import colors from "./colors"

const StyledHp = styled.div`
  width: ${(props) => props.wdt};
  height: 8px;
  background: #f0f0f0;
  position: relative;
  border-radius: 10px;
  &:before {
    content: '';
    width: ${(props) => props.val}%;
    height: 100%;
    border-radius: 10px;
    background-color: ${(props) => props.val < 50 ? colors.red : colors.greenn};
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const HpProgress = ({ value, width }) => {
  return (
    <StyledHp val={value} wdt={width}></StyledHp>
  );
};

export default HpProgress;
