import React from 'react';

const Header = ({ changeContent }) => {
  return (
    <div className="App-header">
      <header role="banner">Practice examples for React</header>
      <nav role="navigation">
        <p name="form" onClick={name => changeContent('form')}>
          Form
        </p>
        <p name="todo" onClick={name => changeContent('todo')}>
          Todo List
        </p>
      </nav>
    </div>
  );
};

export default Header;
