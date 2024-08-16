import React, { useState,useEffect } from 'react';
import TodoList from './components/TodoList';
import Todoinput from './components/Todoinput';


function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('')
  
  function moreData(newlist){
    localStorage.setItem('todos',JSON.stringify({todos:
      newlist
    }))
  };

  function handleAddTodos(newTodo) {
    if (newTodo.trim() === '') return; 
    const newTodoList = [...todos, newTodo];
    moreData(newTodoList)
    setTodos(newTodoList);
  }

  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index);
    moreData(newTodoList)
    setTodos(newTodoList);
  }

  function handleEditTodos(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodos(index);
  }

  useEffect(()=>{
    if (!localStorage){
      return
    }
      let localtodos= localStorage.getItem('todos')
      if (!localtodos){
        return
      }
      localtodos=JSON.parse(localtodos).todos
      setTodos(localtodos)
  },[])

  return (
    <>
      <Todoinput
        handleAddTodos={handleAddTodos}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList
        todos={todos}
        handleDeleteTodos={handleDeleteTodos}
        handleEditTodos={handleEditTodos}
      />
    </>
  );
}

export default App