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
          onChange={props.onToggle}
        />
        <label>
          {props.todo.title}
        </label>
        <button className={style.destroy} onClick={props.onDestroy} />
      </div>
      <input
        className={style.edit}
      />
    </li>
  );
}

TodoItem.propTypes = {
  todo: React.PropTypes.object.isRequired,
  onToggle: React.PropTypes.func.isRequired,
  onDestroy: React.PropTypes.func.isRequired,
};

export default TodoItem;
