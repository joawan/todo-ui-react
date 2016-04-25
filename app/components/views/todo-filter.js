import React from 'react';
import style from 'todomvc-app-css/index.css';
import classNames from 'classnames';

function TodoFilter(props) {
  return (
    <div>
      <footer className={style.footer}>
          <span className={style.todoCount}>
            <strong>{props.count}</strong> left
          </span>
          <ul className={style.filters}>
            <li>
              <a href="#/" className={ classNames({ [style.selected]: true }) }>
                All
              </a>
            </li>
            {' '}
            <li>
              <a href="#/active" className={ classNames({ [style.selected]: false }) }>
                Active
              </a>
            </li>
            {' '}
            <li>
              <a href="#/completed" className={ classNames({ [style.selected]: false }) }>
                Completed
              </a>
            </li>
          </ul>
        </footer>
    </div>
  );
}

export default TodoFilter;
