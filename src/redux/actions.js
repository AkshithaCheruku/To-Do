// actions.js
// Importing action types
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

// Action creator function for adding a new todo
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text }, // Payload contains the text of the new todo
});

// Action creator function for toggling the completion status of a todo
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id }, // Payload contains the id of the todo to be toggled
});

// Action creator function for removing a todo
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id }, // Payload contains the id of the todo to be removed
});

// Action creator function for marking a todo as completed
export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id }, // Payload contains the id of the todo to be marked as completed
});

// Action creator function for marking a todo as incomplete
export const markIncomplete = (id) => ({
  type: MARK_INCOMPLETE,
  payload: { id }, // Payload contains the id of the todo to be marked as incomplete
});

// Action creator function for filtering todos
export const filterTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: { filter }, // Payload contains the filter criteria
});

// Action creator function for marking all todos as completed
export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

// Action creator function for updating the search term
export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: { searchTerm }, // Payload contains the updated search term
});

