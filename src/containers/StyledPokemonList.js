import styled from "@emotion/styled";
import colors from "../components/colors";

const StyledPokemonList = styled.div`
  padding: 20px;
  .grid {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
  }
  .loader {
    text-align: center;
    margin: 30px 0;
    .btn-load {
      padding: 20px;
      display: inline-block;
      font-weight: bold;
      font-size: 1.1em;
      color: ${colors.blue};
      animation: bounce 2s linear infinite;
      transition: all 0.25s ease;
      &:hover {
        animation: none;
      }
      @media(max-width: 768px) {
        font-size: 1em;
      }
    }
  }
  @keyframes bounce {
    0%   { transform: scale(1,1)    translateY(0); }
    10%  { transform: scale(1.1,.9) translateY(0); }
    30%  { transform: scale(.9,1.1) translateY(-30px); }
    50%  { transform: scale(1,1)    translateY(0); }
    57%  { transform: scale(1,1)    translateY(-7px); }
    64%  { transform: scale(1,1)    translateY(0); }
    100% { transform: scale(1,1)    translateY(0); }
  }
`;

export default StyledPokemonList