import React from 'react';
import { connect } from 'react-redux';
import { listTodosSuccess } from '../../actions/todo-actions';
import TodoList from '../views/todo-list';

class TodoListContainer extends React.Component {

  componentDidMount() {
    const event = listTodosSuccess([
      { id: 1, title: 'Get started with react', done: true },
      { id: 2, title: 'Get shit done', done: false },
    ]);
    this.props.dispatch(event);
  }

  render() {
    return (
      <TodoList todos={this.props.todos} />
    );
  }

}

TodoListContainer.propTypes = {
  todos: React.PropTypes.array.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.todoState.todos,
});

export default connect(mapStateToProps)(TodoListContainer);
