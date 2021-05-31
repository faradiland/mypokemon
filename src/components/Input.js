import styled from "@emotion/styled";

const StyledInput = styled.input`
  border: 1px solid #dcdcdc;
  border-radius: 50px;
  padding: 10px 15px;
  text-transform: capitalize;
  outline: none;
  margin-bottom: 20px;
  &:focus, &: hover {
    outline: none;
    border-color: #198a21
  }
  &::placeholder {
    color: #b0b0b0;
  }
`;

const Input = ({ handleChange, placeholder }) => {
  return (
    <StyledInput type='text' onChange={(e) => handleChange(e.target.value)} placeholder={placeholder} />
  );
};

export default Input;
