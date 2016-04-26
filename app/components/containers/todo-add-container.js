import React from 'react';
import { connect } from 'react-redux';
import { addTodoSuccess } from '../../actions/todo-actions';
import TodoAdd from '../views/todo-add';

class TodoAddContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todoValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(event) {
    this.setState({ todoValue: event.target.value });
  }

  handleKeyDown(event) {
    if (event.keyCode !== 13) {
      return;
    }
    event.preventDefault();

    const val = this.state.todoValue.trim();
    if (!val) {
      return;
    }

    this.props.dispatch(addTodoSuccess({
      id: Math.floor(Math.random() * 1000),
      title: val,
      done: false,
    }));
    this.setState({ todoValue: '' });
  }

  render() {
    return (
      <TodoAdd
        value={this.state.todoValue}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }

}

TodoAddContainer.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

export default connect()(TodoAddContainer);
