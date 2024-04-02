// Importing necessary dependency
import { useSelector } from "react-redux";

// Importing TodoItem component
import TodoItem from "./TodoItem";

// Importing useEffect hook from React
import { useEffect } from "react";

// Functional component TodoList
const TodoList = () => {
  // Accessing filteredTodos state from the Redux store using useSelector hook
  const filteredTodos = useSelector((state) => {
    // Extracting todos, filter, and searchTerm from Redux store state
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase(); // Convert search term to lowercase for case-insensitive search

    // Filtering todos based on filter and search term
    return todos.filter((todo) => {
      // Checking if todo matches the filter criteria
      const matchesFilter = (filter === 'COMPLETED' && todo.completed) ||
        (filter === 'INCOMPLETE' && !todo.completed) ||
        filter === 'ALL';

      // Checking if todo text contains the search term
      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

      // Returning true only if both filter and search term match
      return matchesFilter && matchesSearch;
    });
  });

  // Logging filteredTodos to console for debugging
  console.log('Filtered Todos:', filteredTodos);

  // Rendering the TodoList component
  return (
    <ul>
      {/* Placeholder message for empty todo list */}
      <li className="text-white my-2 text-sm italic">Your notes is here...</li>
      {/* Mapping over filteredTodos and rendering TodoItem component for each todo */}
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

// Exporting the TodoList component as the default export
export default TodoList;

