import React from 'react';
import { useState } from 'react';

function Todoinput({ handleAddTodos, todoValue, setTodoValue }) {
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="Enter to do..."
      />
      <button
        onClick={() => {
          if (todoValue.trim() !== '') {
            handleAddTodos(todoValue);
            setTodoValue(''); // Clear the input after adding a todo
          }
        }}
      >
        Add
      </button>
    </header>
  );
}

export default Todoinput;
