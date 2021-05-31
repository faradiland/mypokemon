import styled from "@emotion/styled";
import colors from "./../components/colors";

const StyledPokemonDetail = styled.div`
  .image-container {
    margin: auto;
    width: 300px;
    height: 300px;
    position: relative;
    border-radius: 50%;
    background: #7eca9c;
    &:before {
      content: '';
      ba
    }
    .pokemon-image {
      width: 100%;
    }
    .flip-btn {
      position: absolute;
      right: -50px;
      top: 50%;
      transform: translateY(-50%);
      width: 25px;
      opacity: 0.2;
      &:hover {
        opacity: 0.5;
        transition: 0.2s ease
      }
      img {
        width: 100%;
      }
    }
    @media(max-width: 480px) {
      width: 60%;
      height: auto;
    }
  }
  .catch-btn {
    width: 100px;
    margin: auto;
    cursor: pointer;
    &:hover {
      img {
        animation:none;
      }
      .title {
        color: #000;
        transition: 0.2s ease
      }
    }
    img {
      width: 50px;
      animation:zoom 0.6s linear infinite;
    }
    .title {
      font-weight: bold
    }
  }
  .preview {
    text-align: center;
  }
  .info {
    background: #fefefe;
    position: relative;
    top: 30px;
    padding: 30px 20px;
    overflow: hidden;
    border-radius: 30px 30px 0 0;
    box-shadow: 0 0 10px #eee;
    &-title {
      color: #b0b0b0;
      line-height: 1.7em;
    }
    &-desc {
      font-weight: bold;
      line-height: 1.7em;
    }
  }
  .flex {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    > div {
      width: 50%;
    }
  }
  .stat {
    &-item {
      width: 100%;
      td:first-child {
        width: 140px
      }
      td:nth-of-type(2) {
        width: 50px
      }
    }
    &-name {
      width: 20%;
      text-transform: capitalize;
    }
    &-value {
      width: 20%
    }
  }
  .avatar {
    padding: 0 20px;
  }
  .tabs {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    margin-bottom: 30px;
    .tab {
      padding: 0 0 20px;
      width: calc(100% / 3);
      text-align: center;
      position: relative;
      cursor: pointer;
      bottom: -2px;
      color: #b0b0b0;
      &.active {
        border-bottom: 3px solid ${colors.blue};
        // font-weight: bold;
        color: #444;
        transition: all 0.2s ease;
      }
    }
  }
  .save-btn {
    border: 1px solid #198a21;
    background: #198a21;
    color: #fff;
    border-radius: 50px;
    padding: 8px;
    text-align: center;
    transition: all 0.2s ease;
    &:hover {
      background: #14a01d;
    }
  }
  @-moz-keyframes zoom { 50% { -moz-transform: scale(1.2); } 100% { -moz-transform: rotate(360deg) scale(1); } }
  @-webkit-keyframes zoom { 50% { -webkit-transform: scale(1.2); } 100% { -webkit-transform: rotate(360deg) scale(1); } }
  @keyframes zoom { 50% { -webkit-transform: scale(1.2); transform:scale(1.2); } 100% { -webkit-transform: rotate(360deg) scale(1); transform:rotate(360deg) scale(1); }  }
`;

export default StyledPokemonDetail;