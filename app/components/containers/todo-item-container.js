import React from 'react';
import { connect } from 'react-redux';
import { updateTodoSuccess, deleteTodoSuccess } from '../../actions/todo-actions';
import TodoItem from '../views/todo-item';

class TodoItemContainer extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.destroy = this.destroy.bind(this);
  }

  toggle() {
    const todo = Object.assign({}, this.props.todo, { done: !this.props.todo.done });
    this.props.dispatch(updateTodoSuccess(todo));
  }

  destroy() {
    const todo = Object.assign({}, this.props.todo);
    this.props.dispatch(deleteTodoSuccess(todo));
  }

  render() {
    return (
      <TodoItem
        todo={this.props.todo}
        onToggle={this.toggle}
        onDestroy={this.destroy}
      />
    );
  }

}

TodoItemContainer.propTypes = {
  todo: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

export default connect()(TodoItemContainer);
