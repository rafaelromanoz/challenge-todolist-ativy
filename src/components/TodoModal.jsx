import React, { useContext, useState } from 'react';
import ToDosContext from '../context/ToDosContext';
import { ContainerTodoModal, InputModal } from './styles/TodoModalStyles';

export default function TodoModal() {
  const {
    isModalOpen,
    setTodosList,
    setModalOpen,
    currentId,
    todosList,
  } = useContext(ToDosContext);
  const [updatedValueTodo, setUpdatedValueTodo] = useState('');
  const saveUpdatedTodo = () => {
    // aqui faço uma cópia da lista de todo, e faço o update da task
    const newUpdatedListTodo = [...todosList];
    newUpdatedListTodo[currentId].todo = updatedValueTodo;
    // seto o novo valor
    setTodosList(newUpdatedListTodo);
    // limpo o valor
    setUpdatedValueTodo('');
    // desativa o modal
    setModalOpen((prevStateToggle) => !prevStateToggle);
  };
  if (isModalOpen) {
    return (
      <ContainerTodoModal>
        <InputModal
          type="text"
          onChange={({ target }) => setUpdatedValueTodo(target.value)}
          value={updatedValueTodo}
        />
        <button type="button" onClick={saveUpdatedTodo}>Salvar</button>
      </ContainerTodoModal>
    );
  } return null;
}
