import styled from 'styled-components';

const ContainerTodoModal = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 250px;
`;

const InputModal = styled.input`
`;

const ButtonModal = styled.button`
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

export { ContainerTodoModal, InputModal, ButtonModal };
