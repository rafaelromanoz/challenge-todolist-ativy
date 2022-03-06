import styled from 'styled-components';

const TodoContainerCard = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin: 15px;
`;

const TodoCard = styled.div`
  border-radius: 5px;
  border: solid 2px black;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export { TodoContainerCard, TodoCard };
