import PropTypes from 'prop-types';
import React, { useMemo, useRef, useState } from 'react';
import ToDosContext from './ToDosContext';

export default function ToDosProvider({ children }) {
  const [todosList, setTodosList] = useState([]);
  const [id, setId] = useState(0);
  const [todo, setTodo] = useState('');
  // const [isModalOpen, setModalOpen] = useState(false);
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
    inputRef.current.focus();
  };
  const handleClickDeleteTodo = (idTodo) => {
    // aqui é pego os todos e retorno todos que são diferentes do id, fazendo assim a exclusão
    setTodosList((prevStateTodos) => prevStateTodos.filter((t) => t.id !== idTodo));
  };
  const context = {
    setTodo,
    handleClickAddTodo,
    handleClickDeleteTodo,
    todo,
    inputRef,
    todosList,
  };
  const valueContextMemo = useMemo(() => ({
    ...context,
  }));

  return (
    <ToDosContext.Provider value={valueContextMemo}>
      {children}
    </ToDosContext.Provider>
  );
}

ToDosProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
