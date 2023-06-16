import styled from 'styled-components';

const Label = styled.label`
  font-weight: 500;
  font-size: 16px;

  color: rgb(62, 23, 8);
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 460px;
  align-items: center;
  margin: 0 auto;

  input {
    width: 100%;
    border-radius: 5px;
    padding: 10px 15px;
    outline: none;
    border: 2px solid rgb(203, 171, 171);
  }
`;

export { Label };
