import React from 'react';

const TodoList = ({ todos, handleComplete }) => {

    return (
        <ul>
            {todos.map(todo =>(
                <li key={todo.id}>
                    {todo.text} {todo.complete ? true : ''}
                    {!todo.complete && (
                        <button onClick={() => handleComplete(todo.id)}>
                            Complete
                        </button>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;