import React from 'react';
import TodoList from '../views/todo-list';

class TodoListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, title: 'Get started with react', done: true },
        { id: 2, title: 'Get shit done', done: false },
      ],
    };
  }

  render() {
    return (
      <TodoList todos={this.state.todos} />
    );
  }

}

export default TodoListContainer;
