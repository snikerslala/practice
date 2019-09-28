import React from 'react';

function TodoItem(props) {
  const { id, text, done } = props.item;

  return (
    <>
      <label className={done && 'Todo-done'}>
        <input
          type="checkbox"
          id={id}
          checked={done}
          onChange={() => props.handleChange(id)}
        />
        {text}
      </label>
      <hr />
    </>
  );
}

export default TodoItem;
