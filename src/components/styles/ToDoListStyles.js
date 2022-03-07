import styled from 'styled-components';

const TodoContainerCard = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin: 15px;
`;

const TodoCard = styled.div`
  border-radius: 10px;
  color: #ffff;
  padding: 20px;
  width: 300px;
  background: #2f2f2f;
  margin-right: 33px;
  border: solid 2px black;
  flex: 1;
`;

const ButtonEdit = styled.button`
  background-color: #fff000;
  border-radius: 12px;
  color: #000;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 15px;
  text-align: center;
  transition: 200ms;
  box-sizing: border-box;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;

const ButtonDelete = styled.button`
  background-color: #6f1e1e;
  border-radius: 12px;
  color: #000;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 15px;
  text-align: center;
  transition: 200ms;
  box-sizing: border-box;
  margin-left: 6px;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;

export {
  TodoContainerCard, TodoCard, ButtonEdit, ButtonDelete,
};
