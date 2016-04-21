import React from 'react';
import TodoAddContainer from '../containers/todo-add-container';
import TodoListContainer from '../containers/todo-list-container';
import style from 'todomvc-app-css/index.css';

function MainLayout(props) {
  return (
    <div className={style.todoapp}>
      <header className="primary-header"></header>
      <main>
        <TodoAddContainer />
        <TodoListContainer />
        {props.children}
      </main>
    </div>
  );
}

MainLayout.propTypes = {
  children: React.PropTypes.element,
};

export default MainLayout;
