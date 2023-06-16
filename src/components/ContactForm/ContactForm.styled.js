import styled from 'styled-components';

const Form = styled.form`
  padding: 30px 20px;
  background-color: rgb(203 171 171);
  width: 500px;
  display: flex;
  border: 3px solid rgb(240, 128, 128);
  flex-direction: column;
  margin-bottom: 20px;
  gap: 20px;
  margin: 0 auto;

  label {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    color: rgb(62 23 8);
  }

  input {
    border-radius: 5px;
    padding: 10px 15px;
    outline: none;
    border: 1px solid rgb(121, 85, 72);
    font: inherit;
  }

  button {
    font-weight: 600;
    font-size: 14px;
    background-color: white;
    color: rgb(62 23 8);
    border: none;
    width: 120px;
    display: block;
    margin: 0 auto;
    padding: 10px 15px;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export { Form };
