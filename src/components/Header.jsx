import React, { useContext } from 'react';
import ToDosContext from '../context/ToDosContext';
import {
  HeaderContainer,
  Input,
  LabelInput,
  Title,
  ButtonHeader,
  ContainerInputAndButton,
} from './styles/HeaderStyles';

export default function Header() {
  const {
    inputRef,
    setTodo,
    todo,
    handleClickAddTodo,
  } = useContext(ToDosContext);
  return (
    <HeaderContainer>
      <Title>Challenge TodoList Ativy</Title>
      <ContainerInputAndButton>
        <LabelInput htmlFor="inputTodo">
          <Input
            id="inputTodo"
            type="text"
            ref={inputRef}
            placeholder="digite um todo"
            onChange={({ target }) => setTodo(target.value)}
            value={todo}
          />
        </LabelInput>
        <ButtonHeader
          aria-label="ButtonHeaderAdd"
          type="button"
          disabled={todo === ''}
          id="buttonAdd"
          onClick={handleClickAddTodo}
        >
          Adicionar
        </ButtonHeader>
      </ContainerInputAndButton>
    </HeaderContainer>
  );
}
