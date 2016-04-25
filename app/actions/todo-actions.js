import * as types from '../actions/action-types';

export function listTodosSuccess(todos) {
  return {
    type: types.LIST_TODOS_SUCCESS,
    todos,
  };
}

export function addTodoSuccess(todo) {
  return {
    type: types.ADD_TODO_SUCCESS,
    todo,
  };
}

export function updateTodoSuccess(todo) {
  return {
    type: types.UPDATE_TODO_SUCCESS,
    todo,
  };
}

export function deleteTodoSuccess(todo) {
  return {
    type: types.DELETE_TODO_SUCCESS,
    todo,
  };
}

