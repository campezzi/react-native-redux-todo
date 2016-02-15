import React, { AsyncStorage } from 'react-native';
import * as types from './actionTypes';

const STORAGE_KEY = "io.campezzi.todos";

export function loadTodos() {
  return (dispatch) => {
    AsyncStorage.getItem(STORAGE_KEY, (error, result) => {
      let todos = JSON.parse(result) || [];
      dispatch(loadedTodos(todos));
    });
  };
};

export function loadedTodos(todos) {
  return {
    type: types.LOADED_TODOS,
    todos,
  };
}

export function saveTodos() {
  return (dispatch, getState) => {
    let todos = getState().todo.items;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos), () => {});
  };
}

export function clearTodos() {
  return {
    type: types.CLEAR_TODOS,
  };
}

export function addTodo(todo) {
  return {
    type: types.ADD_TODO,
    todo,
  };
};

export function toggleTodo(todo) {
  return {
    type: types.TOGGLE_TODO,
    todo,
  };
}
