import React, { useMemo, useRef, useState } from 'react';
import Home from '../pages/Home';
import ToDosContext from './ToDosContext';

export default function ToDosProvider() {
  const [todosList, setTodosList] = useState([]);
  const [id, setId] = useState(0);
  const [currentId, setCurrentId] = useState(0);
  const [todo, setTodo] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLightOrDarkMode, setIsLightOrDarkMode] = useState(true);
  const inputRef = useRef();
  const handleClickAddTodo = () => {
    // aqui estou criando um id para ser mais fácil identificar os todos
    setId((idPrevState) => idPrevState + 1);
    // crio um novo todo inserindo o id
    const newTodo = {
      id,
      todo,
    };
    // aqui pegamos o prevstate que é o array, faz o spread e adiciona um novo todo
    setTodosList((todoList) => [...todoList, newTodo]);
    setTodo('');
    // voltar o foco no input
    inputRef.current.focus();
  };

  const handleClickDeleteTodo = (idTodo) => {
    // aqui é pego os todos e retorno todos que são diferentes do id, fazendo assim a exclusão
    setTodosList((prevStateTodos) => prevStateTodos.filter((t) => t.id !== idTodo));
  };

  const handleClickUpdateTodo = (currentIdUpdate) => {
    // abrir o modal
    setModalOpen(!isModalOpen);
    // setar o id clicado
    setCurrentId(currentIdUpdate);
  };

  const context = {
    setTodo,
    handleClickAddTodo,
    handleClickDeleteTodo,
    handleClickUpdateTodo,
    setTodosList,
    setModalOpen,
    setIsLightOrDarkMode,
    isModalOpen,
    todo,
    inputRef,
    todosList,
    id,
    currentId,
    isLightOrDarkMode,
  };

  const valueContextMemo = useMemo(() => ({
    ...context,
  }));

  return (
    <ToDosContext.Provider value={valueContextMemo}>
      <Home />
    </ToDosContext.Provider>
  );
}
