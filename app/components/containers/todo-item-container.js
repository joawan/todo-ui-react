import React from 'react';
import TodoItem from '../views/todo-item';

class TodoItemContainer extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.destroy = this.destroy.bind(this);
  }

  toggle() {

  }

  destroy() {

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
};

export default TodoItemContainer;
