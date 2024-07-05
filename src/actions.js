import { type } from "@testing-library/user-event/dist/type";

export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const addTodo = (inputText) => ({
  type: ADD_TODO,
  payload: { id: Date.now(), inputText },
});

export const editTodo = (id, inputText) => ({
  type: EDIT_TODO,
  payload: { id, inputText },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
