import React, { useContext } from 'react';
import ToDosContext from '../context/ToDosContext';

export default function ToDoList() {
  const { todosList, handleClickDeleteTodo, handleClickUpdateTodo } = useContext(ToDosContext);
  if (todosList.length === 0) return <p>Nenhum todo até o momento</p>;
  return (
    <section>
      {todosList.map(({ todo, id }) => (
        <div key={id}>
          <p>{todo}</p>
          <button
            type="button"
            onClick={() => handleClickUpdateTodo(id)}
          >
            Editar
          </button>
          <button
            onClick={() => handleClickDeleteTodo(id)}
            type="button"
          >
            Deletar
          </button>
        </div>
      ))}
    </section>
  );
}
