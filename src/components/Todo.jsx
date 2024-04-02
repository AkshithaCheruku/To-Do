// Todo.js
// Importing necessary dependencies from React and react-redux
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Importing components and icons
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';
import { BsSearch, BsPlus } from 'react-icons/bs';

// Importing action creators from redux/actions file
import { addTodo, updateSearchTerm } from '../redux/actions';

// Functional component Todo
const Todo = () => {
  // Accessing todos and filter state from the Redux store using useSelector hook
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);

  // Accessing dispatch function from Redux store
  const dispatch = useDispatch();

  // State variables for new todo text and search term
  const [newTodoText, setNewTodoText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle adding a new todo
  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  // Event handler for adding a new todo when the add button is clicked
  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== '') {
      handleAddTodo(newTodoText.trim());
      setNewTodoText('');
    }
  };

  // Event handler for updating search term and dispatching action
  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    // Main container with styling classes
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-purple-900 rounded">
      {/* Title for the todo list */}
      <h2 className='text-white mt-3 mb-6 text-2xl font-bold text-center uppercase'>Personal Task Organizer</h2>

      {/* Container for input field to add new todo */}
      <div className="flex items-center mb-4">
        {/* Input field for adding new todo */}
        <input
          id="addTodoInput"
          className=" bg-purple-200 flex-grow p-2 border-b-2 border-purple-300 focus:outline-none focus:border-purple-500"
          type="text"
          placeholder="What's the task today?"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />

        {/* Button to add new todo */}
        <button
          className="ml-4 p-2 bg-purple-500 text-white rounded hover:bg-purple-600 focus:outline-none"
          onClick={handleAddTodoClick}
        >
          <BsPlus size={20} />
        </button>
      </div>

      {/* Container for filter buttons and search input */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Component for filter buttons */}
        <FilterButtons />

        {/* Container for search input */}
        <div className="flex items-center mb-4">
          {/* Input field for search */}
          <input
            className="bg-purple-200 flex-grow p-2 border-b-2 border-purple-300 focus:outline-none focus:border-purple-500"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />

          {/* Button for search */}
          <button className="ml-4 p-2 bg-purple-500 text-white rounded hover:bg-purple-600 focus:outline-none">
            <BsSearch size={20} />
          </button>
        </div>
      </div>

      {/* Component for rendering todo list */}
      <TodoList />
    </div>
  );
};

// Exporting the Todo component as the default export
export default Todo;
