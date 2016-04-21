import React from 'react';
import style from './todo-list.css';

function TodoList(props) {
  return (
    <div className={style.dataList}>
      {props.todos.map(todo =>
        (
          <div key={todo.id} className={style.listItem}>
            <div className="details">{todo.title}</div>
          </div>
        )
      )}
    </div>
  );
}

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
};

export default TodoList;
