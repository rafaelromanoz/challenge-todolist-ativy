import React, { useContext } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import ToDosContext from '../context/ToDosContext';
import {
  ButtonDelete, ButtonEdit, TodoCard, TodoContainerCard,
} from './styles/ToDoListStyles';

export default function ToDoList() {
  const {
    todosList,
    handleClickDeleteTodo,
    handleClickUpdateTodo,
  } = useContext(ToDosContext);

  if (todosList.length === 0) {
    return (
      <p style={{ textAlign: 'center', color: 'white' }}>
        Nenhum todo até o momento.
      </p>
    );
  }
  return (
    <TodoContainerCard>
      {todosList.map(({ todo, id }) => (
        <TodoCard key={id}>
          <p>{todo}</p>
          <ButtonEdit
            type="button"
            onClick={() => handleClickUpdateTodo(id)}
          >
            Editar
            <AiOutlineEdit />
          </ButtonEdit>
          <ButtonDelete
            onClick={() => handleClickDeleteTodo(id)}
            type="button"
          >
            Deletar
            <AiOutlineDelete />
          </ButtonDelete>
        </TodoCard>
      ))}
    </TodoContainerCard>
  );
}
