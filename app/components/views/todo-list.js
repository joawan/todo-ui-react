import React from 'react';
import style from 'todomvc-app-css/index.css';
import TodoItem from './todo-item';

function TodoList(props) {
  return (
    <div className={style.main}>
      <ul className={style.todoList}>
      {props.todos.map(todo =>
        (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
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
