// FilterButtons.jsx
// Importing necessary dependencies from React and react-redux
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Importing action creators from redux/actions file
import { filterTodos, markAllCompleted } from '../redux/actions';

// Functional component FilterButtons
const FilterButtons = () => {
  // Accessing the dispatch function from Redux store
  const dispatch = useDispatch();

  // Selecting currentFilter state from the Redux store using useSelector hook
  const currentFilter = useSelector((state) => state.filter);

  // Function to handle filter selection
  const handleFilter = (filter) => {
    // Dispatching filterTodos action with selected filter as payload
    dispatch(filterTodos(filter));
  };

  return (
    // Container div with flex display, spacing, and item alignment
    <div className="flex space-x-4 items-center">
      {/* Select dropdown for filtering todos */}
      <select
        // CSS classes for styling
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
        // Value attribute bound to currentFilter state
        value={currentFilter}
        // Event handler for filter selection change
        onChange={(e) => handleFilter(e.target.value)}
      >
        {/* Option for displaying all todos */}
        <option value="ALL">Default</option>
        {/* Option for displaying completed todos */}
        <option value="COMPLETED">Completed</option>
        {/* Option for displaying incomplete todos */}
        <option value="INCOMPLETE">Incomplete</option>
      </select>

      {/* Button for marking all tasks as completed */}
      <button
        // CSS classes for styling
        className="text-sm px-2 py-1 bg-purple-500 text-white rounded ml-2"
        // Event handler for marking all tasks as completed
        onClick={() => dispatch(markAllCompleted())}
      >
        Mark All tasks as completed
      </button>
    </div>
  );
};

// Exporting the FilterButtons component as the default export
export default FilterButtons;
