import React, { useState } from 'react';
import './../styles/App.css';
import TodoList from './TodoList';

const App = () => {
  // Initialize state with sample todos
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React fundamentals', completed: false },
    { id: 2, text: 'Practice lifting state up', completed: false },
    { id: 3, text: 'Build a todo application', completed: false },
    { id: 4, text: 'Understand component communication', completed: false },
    { id: 5, text: 'Master conditional rendering', completed: true }
  ]);
  
  // Function to handle completing a todo item
  const handleComplete = (todoId) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === todoId 
          ? { ...todo, completed: true }
          : todo
      )
    );
  };
  
  return (
    <div>
      {/* Do not remove the main div */}
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;