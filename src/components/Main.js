import React from 'react';
import TodoItemList from './TodoList/TodoItemList';
import Form from './Form/Form';
import Balls from './Balls/Balls';

const Main = ({ content }) => {
  return (
    <main role='main' className='App-main'>
      {content === 'todo' ? (
        <TodoItemList />
      ) : content === 'form' ? (
        <Form />
      ) : (
        <Balls />
      )}
    </main>
  );
};

export default Main;
