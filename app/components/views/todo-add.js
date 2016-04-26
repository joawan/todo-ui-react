import React from 'react';
import style from 'todomvc-app-css/index.css';

function TodoAdd(props) {
  return (
    <div>
      <header className={style.header}>
        <h1>todos</h1>
        <input
          className={style.newTodo}
          placeholder="What needs to be done?"
          value={props.value}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
          autoFocus
        />
      </header>
    </div>
  );
}

TodoAdd.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onKeyDown: React.PropTypes.func.isRequired,
};

export default TodoAdd;
