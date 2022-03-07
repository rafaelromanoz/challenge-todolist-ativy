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
  width: 100px;
  border-radius: 6px;
  background-color: #f6f059;
`;

const ButtonDelete = styled.button`
  width: 100px;
  background-color: #6f1e1e;
  border-radius: 6px;
`;

export {
  TodoContainerCard, TodoCard, ButtonEdit, ButtonDelete,
};
