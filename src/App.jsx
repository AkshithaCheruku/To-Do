// Importing the CSS file for styling
import './App.css';

// Importing the Todo component from the Todo.js file located in the components folder
import Todo from './components/Todo';

// Functional component named App
function App() {
  // Returning JSX: wrapping the Todo component inside an empty fragment <>
  // An empty fragment is used when you need to return multiple elements without a wrapper element
  return (
    <>
      {/* Rendering the Todo component */}
      <Todo />
    </>
  );
}

// Exporting the App component as the default export
export default App;

