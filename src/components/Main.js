import React, { Component } from 'react';
import TodoItemList from './TodoList/TodoItemList';

class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <main role="main" className="App-main">
        <TodoItemList />
      </main>
    );
  }
}

export default Main;
