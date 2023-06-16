import styled from 'styled-components';

const List = styled.ul`
  background-color: rgb(203, 171, 171);
  width: 450px;
  border: 3px solid rgb(240, 128, 128);
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 8px;
  margin: 0 auto;
  align-items: center;
  margin-top: 30px;
  padding: 5px 15px;

  li {
    border: 1px solid rgb(121, 85, 72);
    padding: 4px 8px;
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    background-color: white;
  }

  button {
    background-color: rgb(255 152 0);
    font-size: 10px;
    border-radius: 50%;
    padding: 5px;
    width: 25px;
    height: 25px;
    border: none;
    cursor: pointer;
  }
`;

export { List };
