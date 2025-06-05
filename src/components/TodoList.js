import React from 'react';

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{ 
              textDecoration: todo.completed ? 'line-through' : 'none',
              marginRight: '10px'
            }}>
              {todo.text}
            </span>
            {!todo.completed && (
              <button onClick={() => handleComplete(todo.id)}>
                Complete
              </button>
            )}
            {todo.completed && (
              <span style={{ color: 'green', fontWeight: 'bold' }}>
                ✓ Completed
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;