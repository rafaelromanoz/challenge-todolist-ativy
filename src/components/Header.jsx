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
import iconMostDark from '../images/iconMostDarkMode.svg';
import iconMostLight from '../images/iconMostLightMode.svg';

export default function Header() {
  const {
    inputRef,
    setTodo,
    todo,
    handleClickAddTodo,
    isLightOrDarkMode,
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
          <img src={isLightOrDarkMode ? iconMostDark : iconMostLight} alt="mostIcon" />
        </ButtonHeader>
      </ContainerInputAndButton>
    </HeaderContainer>
  );
}
