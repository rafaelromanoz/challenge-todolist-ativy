import React, { useState } from 'react';
import Header from '../components/Header';
import ToDoList from '../components/ToDoList';

export default function Home() {
  const [todosList, setTodosList] = useState([]);
  const [id, setId] = useState(0);
  const [todo, setTodo] = useState('');
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
  };
  const handleClickDeleteTodo = (idTodo) => {
    setTodosList((prevStateTodos) => prevStateTodos.filter((p) => p.id !== idTodo));
  };
  return (
    <div>
      <Header
        setTodo={setTodo}
        todo={todo}
        handleClickAddTodo={handleClickAddTodo}
      />
      <ToDoList
        todos={todosList}
        handleClickDeleteTodo={handleClickDeleteTodo}
      />
    </div>
  );
}
