import { combineReducers } from 'redux';
import todoReducer from './todo-reducer';

const reducers = combineReducers({
  todoState: todoReducer,
});

export default reducers;
