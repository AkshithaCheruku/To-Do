// Importing necessary dependencies from react-redux and redux actions
import { useDispatch } from 'react-redux';
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from '../redux/actions';

// Importing icons for UI
import { FaToggleOn, FaToggleOff, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

// Functional component TodoItem
const TodoItem = ({ todo, index }) => {
  // Accessing dispatch function from Redux store
  const dispatch = useDispatch();

  return (
    // List item container with flex layout and gap
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      {/* Container for todo item text and index */}
      <div className="flex items-center">
        {/* Displaying todo item index */}
        <span className="mr-4 text-white">
          {index + 1}.
        </span>
        {/* Displaying todo item text with optional line-through if completed */}
        <span className={`mr-4 text-white ${todo.completed ? 'line-through text-white' : ''}`}>
          {todo.text}
        </span>
      </div>

      {/* Container for todo item action buttons */}
      <div className='space-x-3 ml-8'>
        {/* Button to toggle todo completion status */}
        <button
          className="mr-2 text-sm bg-purple-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(toggleTodo(index))}
        >
          {/* Displaying toggle icons based on todo completion status */}
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>

        {/* Button to remove todo item */}
        <button
          className="mr-2 text-sm bg-purple-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>

        {/* Button to mark todo item as completed */}
        {!todo.completed && (
          <button
            className="text-sm bg-purple-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaCheck />
          </button>
        )}

        {/* Button to mark todo item as incomplete */}
        {todo.completed && (
          <button
            className="text-sm bg-purple-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

// Exporting the TodoItem component as the default export
export default TodoItem;
