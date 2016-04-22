import React from 'react';
import style from 'todomvc-app-css/index.css';
import TodoItemContainer from '../containers/todo-item-container';

function TodoList(props) {
  return (
    <div className={style.main}>
      <ul className={style.todoList}>
      {props.todos.map(todo =>
        (
          <TodoItemContainer
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
