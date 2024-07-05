import { ADD_TODO, EDIT_TODO, DELETE_TODO } from "../actions";

const firstState = {
  todosList: [],
};

const todoReducer = (state = firstState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todosList: [...state.todosList, action.payload] };

    case EDIT_TODO:
      return {
        ...state,
        todosList: state.todosList.map((todoItem) =>
          todoItem.id === action.payload.id
            ? { ...todoItem, inputText: action.payload.inputText }
            : todoItem
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        todosList: state.todosList.filter(
          (todoItem) => todoItem.id != action.payload
        ),
      };
    default:
      return state;
  }
};
export default todoReducer;
