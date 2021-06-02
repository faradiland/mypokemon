import styled from "@emotion/styled";

const Result = styled.div`
  text-align: center;
  .btn-wrapper {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
  }
  .yes-btn, .no-btn {
    width: 100px;
    border: 2px solid #198a21;
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
  .no-btn {
    background: #fff;
    color: #198a21;
    &:hover {
      background: #14a01d;
      color: #fff;
    }
  }
  &.centered{
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`

export default Result;