import React, { useContext } from 'react';
import Header from '../components/Header';
import ToDoList from '../components/ToDoList';
import TodoModal from '../components/TodoModal';
import ToggleThemeButton from '../components/ToggleThemeButton';
import ToDosContext from '../context/ToDosContext';
import GlobalStyle from '../globalStyles';

export default function Home() {
  const { isLightOrDarkMode } = useContext(ToDosContext);
  return (
    <div>
      <GlobalStyle theme={isLightOrDarkMode} />
      <ToggleThemeButton />
      <Header />
      <ToDoList />
      <TodoModal />
    </div>
  );
}
