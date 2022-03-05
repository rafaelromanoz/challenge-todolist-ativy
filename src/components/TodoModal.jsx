import React, { useContext, useState } from 'react';
import ToDosContext from '../context/ToDosContext';

export default function TodoModal() {
  const { isModalOpen } = useContext(ToDosContext);
  const [updatedValueTodo, setUpdatedValueTodo] = useState('');
  if (isModalOpen) {
    return (
      <div>
        <input
          type="text"
          onChange={({ target }) => setUpdatedValueTodo(target.value)}
          value={updatedValueTodo}
        />
        {/* <button onClick={}>Salvar</button> */}
      </div>
    );
  } return null;
}
