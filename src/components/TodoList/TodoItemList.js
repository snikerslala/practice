import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';
import Loader from '../Loader';
import './TodoItemList.css';

const TodoItemList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setTodos(todosData);
    setIsLoading(false);
  }, []);

  const handleTodoChange = id => {
    const updatedTodos = todos.map(item => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });

    setTodos(updatedTodos);
  };

  const TodoItems = todos.map(item => (
    <TodoItem key={item.id} item={item} handleChange={handleTodoChange} />
  ));

  return (
    <main role="main" className="App-main">
      <h1>This is a simple TodoList</h1>
      <div className="Todo-list">{isLoading ? <Loader /> : TodoItems}</div>
    </main>
  );
};

export default TodoItemList;
