import PropTypes from 'prop-types';
import React from 'react';

export default function ToDoList({
  todos,
  handleClickDeleteTodo,
}) {
  if (todos.length === 0) return <p>Nenhum todo até o momento</p>;
  return (
    <section>
      {todos.map(({ todo, id }) => (
        <div key={id}>
          <p>{todo}</p>
          <button type="button">Editar</button>
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

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleClickDeleteTodo: PropTypes.func.isRequired,
};
