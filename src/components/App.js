import React,{useState} from "react";
// import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {

  const [todos, setTodos] = useState([
    {id: 1, text: 'Learn React', complete: false },
    {id: 2, text: 'Build a React app', complete: false },
    {id: 3, text: 'Deploy the React app', complete: false },
  ]);

  const handleComplete = (id) => {
    setTodos(prevTodos=>
      prevTodos.map(todo =>
        todo.id === id ? {...todo, complete: true} : todo
      )
    );
  };
  
  return (
    <div>
      <h1>Parent Component</h1>
      <h2>Child Component</h2>
      <TodoList todos={todos} handleComplete={handleComplete}/>
    </div>
  );
};

export default App;