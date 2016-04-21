import React from 'react';
import style from 'todomvc-app-css/index.css';

function TodoList(props) {
  return (
    <div className={style.main}>
      <ul className={style.todoList}>
      {props.todos.map(todo =>
        (
          <li key={todo.id}>
            <div className={style.view}>
            <input
              className={style.toggle}
              type="checkbox"
              checked={todo.done}
            />
            <label>
              {todo.title}
            </label>
            <button className={style.destroy} />
          </div>
          <input
            className={style.edit}
          />
          </li>
        )
      )}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
};

export default TodoList;
