import React from 'react';
import { connect } from 'react-redux';
import TodoFilter from '../views/todo-filter';

function TodoFilterContainer(props) {
  const count = props.todos.reduce((prev, curr) => (!curr.done ? prev + 1 : prev), 0);
  return (
    <TodoFilter count={count} />
  );
}

TodoFilterContainer.propTypes = {
  todos: React.PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.todoState.todos,
});

export default connect(mapStateToProps)(TodoFilterContainer);
