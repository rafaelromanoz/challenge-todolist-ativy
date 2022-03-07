import React, { useContext } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import ToDosContext from '../context/ToDosContext';
import { TodoCard, TodoContainerCard } from './styles/ToDoListStyles';

export default function ToDoList() {
  const {
    todosList,
    handleClickDeleteTodo,
    handleClickUpdateTodo,
  } = useContext(ToDosContext);

  if (todosList.length === 0) {
    return (
      <p style={{ textAlign: 'center' }}>
        Nenhum todo até o momento.
      </p>
    );
  }
  return (
    <TodoContainerCard>
      {todosList.map(({ todo, id }) => (
        <TodoCard key={id}>
          <p>{todo}</p>
          <button
            type="button"
            onClick={() => handleClickUpdateTodo(id)}
          >
            <AiFillEdit />
          </button>
          <button
            onClick={() => handleClickDeleteTodo(id)}
            type="button"
          >
            <AiFillDelete />
          </button>
        </TodoCard>
      ))}
    </TodoContainerCard>
  );
}
