import React from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import TodoModal from './components/TodoModal';
import ToDosProvider from './context/ToDosProvider';
import GlobalStyle from './globalStyles';

export default function App() {
  return (
    <ToDosProvider>
      <GlobalStyle />
      <Header />
      <ToDoList />
      <TodoModal />
    </ToDosProvider>
  );
}
