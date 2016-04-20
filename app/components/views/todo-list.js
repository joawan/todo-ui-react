import React from 'react';

function TodoList(props) {
  return (
    <div className="data-list">
      {props.todos.map(todo =>
        (
          <div key={todo.id} className="data-list-item">
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
