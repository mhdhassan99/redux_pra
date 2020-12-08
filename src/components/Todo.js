import React from 'react';

const Todo = ({ onClick, completed, text }) => (
    <div className="todo-container">
        <li className="todo-item"
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {
                text
            }
        </li>
    </div>
)

export default Todo;
