import React from 'react';
import style from 'todomvc-app-css/index.css';
import classNames from 'classnames';

function TodoItem(props) {
  return (
    <li className={ classNames({ [style.completed]: props.todo.done }) }>
      <div className={style.view}>
        <input
          type="checkbox"
          checked={props.todo.done}
          className={style.toggle}
        />
        <label>
          {props.todo.title}
        </label>
        <button className={style.destroy} />
      </div>
      <input
        className={style.edit}
      />
    </li>
  );
}

TodoItem.propTypes = {
  todo: React.PropTypes.object.isRequired,
};

export default TodoItem;
