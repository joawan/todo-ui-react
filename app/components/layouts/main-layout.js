import React from 'react';
import TodoAddContainer from '../containers/todo-add-container';
import TodoListContainer from '../containers/todo-list-container';
import TodoFilterContainer from '../containers/todo-filter-container';
import style from 'todomvc-app-css/index.css';

function MainLayout() {
  return (
    <div className={style.todoapp}>
      <main>
        <TodoAddContainer />
        <TodoListContainer />
        <TodoFilterContainer />
      </main>
    </div>
  );
}

export default MainLayout;
