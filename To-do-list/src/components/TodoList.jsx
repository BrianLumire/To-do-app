import React from 'react';
import Todocard from './Todocard';

function TodoList({ todos, handleDeleteTodos, handleEditTodos }) {
  return (
    <ul className="main">
      {todos.map((todo, index) => (
        <Todocard
          key={index}
          index={index}
          handleDeleteTodos={handleDeleteTodos}
          handleEditTodo={handleEditTodos}
        >
          <p>{todo}</p>
        </Todocard>
      ))}
    </ul>
  );
}

export default TodoList;
