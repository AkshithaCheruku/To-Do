/* eslint-disable no-case-declarations */
// reducers.js

// Import action types
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
} from './actionTypes';

// Load state from local storage if available, otherwise initialize with default state
const initialState = loadState() || { todos: [], filter: 'ALL', searchTerm: '' };

// Reducer function for managing todo-related state
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // Handling action to add a new todo
      // eslint-disable-next-line no-case-declarations
      const newStateAfterAdd = {
        ...state,
        todos: [...state.todos, { text: action.payload.text, completed: false }],
      };
      saveState(newStateAfterAdd); // Save updated state to local storage
      return newStateAfterAdd;

    case TOGGLE_TODO:
      // Handling action to toggle the completion status of a todo
      // eslint-disable-next-line no-case-declarations
      const newStateAfterToggle = {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
      saveState(newStateAfterToggle); // Save updated state to local storage
      return newStateAfterToggle;

    case REMOVE_TODO:
      // Handling action to remove a todo
      // eslint-disable-next-line no-case-declarations
      const newStateAfterRemove = {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.payload.id),
      };
      saveState(newStateAfterRemove); // Save updated state to local storage
      return newStateAfterRemove;

    case MARK_COMPLETED:
      // Handling action to mark a todo as completed
      // eslint-disable-next-line no-case-declarations
      const newStateAfterMarkCompleted = {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: true } : todo
        ),
      };
      saveState(newStateAfterMarkCompleted); // Save updated state to local storage
      return newStateAfterMarkCompleted;

    case MARK_INCOMPLETE:
      // Handling action to mark a todo as incomplete
      const newStateAfterMarkIncomplete = {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: false } : todo
        ),
      };
      saveState(newStateAfterMarkIncomplete); // Save updated state to local storage
      return newStateAfterMarkIncomplete;

    case FILTER_TODOS:
      // Handling action to filter todos
      const newStateAfterFilter = {
        ...state,
        filter: action.payload.filter,
      };
      saveState(newStateAfterFilter); // Save updated state to local storage
      return newStateAfterFilter;

    case UPDATE_SEARCH_TERM:
      // Handling action to update the search term
      const newStateAfterUpdateSearchTerm = {
        ...state,
        searchTerm: action.payload.searchTerm,
      };
      saveState(newStateAfterUpdateSearchTerm); // Save updated state to local storage
      return newStateAfterUpdateSearchTerm;

    case MARK_ALL_COMPLETED:
      // Handling action to mark all todos as completed
      const newStateAfterMarkAllCompleted = {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
      };
      saveState(newStateAfterMarkAllCompleted); // Save updated state to local storage
      return newStateAfterMarkAllCompleted;

    default:
      return state;
  }
};

// Function to load state from local storage
function loadState() {
  try {
    const serializedState = localStorage.getItem('todoState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

// Function to save state to local storage
function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todoState', serializedState);
  } catch {
    // Ignore write errors
  }
}

export default todoReducer;
