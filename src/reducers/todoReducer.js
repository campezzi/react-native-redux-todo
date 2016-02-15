import * as types from '../actions/actionTypes';

const initialState = {
  items: [],
  visiblityFilter: 'ALL',
};

export default function todo(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOADED_TODOS:
      return {
        ...state,
        items: action.todos,
      };
    case types.CLEAR_TODOS:
      return {
        ...state,
        items: [],
      };
    case types.ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.todo],
      };
    case types.TOGGLE_TODO:
      let { items } = state;
      let index = items.indexOf(action.todo);
      let toggledTodo = Object.assign({}, items[index]);
      toggledTodo.done = !toggledTodo.done;
      return {
        ...state,
        items: [
          ...items.slice(0, index),
          toggledTodo,
          ...items.slice(index + 1),
        ],
      };
    default:
      return state;
  }
}
