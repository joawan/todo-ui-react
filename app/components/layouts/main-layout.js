import React from 'react';
import TodoListContainer from '../containers/todo-list-container';

function MainLayout(props) {
  return (
    <div className="app">
      <header className="primary-header"></header>
      <main>
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
