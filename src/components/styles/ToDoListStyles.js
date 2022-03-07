import styled from 'styled-components';

const TodoContainerCard = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin: 15px;
`;

const TodoCard = styled.div`
  border-radius: 10px;
  width: 300px;
  border: solid 2px black;
  flex: 1;
`;

export { TodoContainerCard, TodoCard };
