import React from 'react';
import style from 'todomvc-app-css/index.css';

function TodoAdd() {
  return (
    <div>
      <header className={style.header}>
        <h1>todos</h1>
        <input
          className={style.newTodo}
          placeholder="What needs to be done?"
          autoFocus
        />
      </header>
    </div>
  );
}

export default TodoAdd;
