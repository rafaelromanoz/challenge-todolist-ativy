import PropTypes from 'prop-types';
import React from 'react';

export default function Header({ todo, setTodo, handleClickAddTodo }) {
  return (
    <div>
      <h1>Challenge TodoList Ativy</h1>
      <label htmlFor="inputTodo">
        Todo
        <input
          id="inputTodo"
          type="text"
          placeholder="digite um todo"
          onChange={({ target }) => setTodo(target.value)}
          value={todo}
        />
      </label>
      <button
        aria-label="buttonAdd"
        type="button"
        disabled={todo === ''}
        id="buttonAdd"
        onClick={handleClickAddTodo}
      >
        Adicionar
      </button>
    </div>
  );
}

Header.propTypes = {
  setTodo: PropTypes.func.isRequired,
  todo: PropTypes.string.isRequired,
  handleClickAddTodo: PropTypes.func.isRequired,
};
