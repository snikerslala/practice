import React, { Component } from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';
import Loader from '../Loader';

class TodoItemList extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      todos: []
    };
    this.handleTodoChange = this.handleTodoChange.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.setState({ todos: todosData });
    this.setState({ isLoading: false });
  }

  handleTodoChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(item => {
        if (item.id === id) {
          item.done = !item.done;
        }
        return item;
      });
      return { todos: updatedTodos };
    });
  }

  render() {
    const TodoItems = this.state.todos.map(item => (
      <TodoItem
        key={item.id}
        item={item}
        handleChange={this.handleTodoChange}
      />
    ));

    return (
      <main role="main" className="App-main">
        <h1>This is a simple TodoList</h1>
        <div
          style={{
            width: '300px',
            marginLeft: 'auto',
            marginRight: 'auto',
            border: '1px solid white',
            padding: '3px'
          }}
        >
          {this.state.isLoading ? <Loader /> : TodoItems}
        </div>
      </main>
    );
  }
}

export default TodoItemList;
