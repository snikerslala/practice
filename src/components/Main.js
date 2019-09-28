import React from 'react';
import TodoItemList from './TodoList/TodoItemList';
import Form from './Form/Form';

const Main = ({ content }) => {
  return (
    <main role="main" className="App-main">
      {content === 'todo' ? <TodoItemList /> : <Form />}
    </main>
  );
};

export default Main;
