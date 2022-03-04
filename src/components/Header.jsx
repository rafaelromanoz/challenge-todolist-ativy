import React, { useContext } from 'react';
import ToDosContext from '../context/ToDosContext';
import { HeaderContainer, Title } from './styles/HeaderStyles';

export default function Header() {
  const {
    inputRef, setTodo, todo, handleClickAddTodo,
  } = useContext(ToDosContext);
  return (
    <HeaderContainer>
      <Title>Challenge TodoList Ativy</Title>
      <label htmlFor="inputTodo">
        Todo
        <input
          id="inputTodo"
          type="text"
          ref={inputRef}
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
    </HeaderContainer>
  );
}
