import React from 'react';

function TodoItem(props) {
  const { id, text, done } = props.item;

  const styles = {
    color: 'darkred',
    textDecoration: 'line-through'
  };

  return (
    <>
      <label style={done ? styles : null}>
        <input
          type="checkbox"
          id={id}
          checked={done}
          onChange={() => props.handleChange(id)}
        />{' '}
        {text}
      </label>
      <hr />
    </>
  );
}

export default TodoItem;
