import * as types from '../actions/action-types';

const initialState = {
  todos: [],
};

const todoReducer = function todoReducer(state = initialState, action) {
  switch (action.type) {
    case types.LIST_TODOS_SUCCESS: {
      return Object.assign({}, state, { todos: action.todos });
    }

    case types.ADD_TODO_SUCCESS: {
      const todos = state.todos.concat([action.todo]);
      return Object.assign({}, state, { todos });
    }

    case types.UPDATE_TODO_SUCCESS: {
      let { todos } = state;
      todos = todos.map((el) => (el.id === action.todo.id ? action.todo : el));
      return Object.assign({}, state, { todos });
    }

    case types.DELETE_TODO_SUCCESS: {
      let { todos } = state;
      todos = todos.filter((el) => (el.id !== action.todo.id));
      return Object.assign({}, state, { todos });
    }

    default: {
      return state;
    }
  }
};

export default todoReducer;
