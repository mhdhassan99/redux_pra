import React from 'react';
import Todo from './Todo'

const TodoList = ({todos, toggleTodo}) => {
    return (
        <div className="todo-list-container">
            <ul>
                {todos.map(todo => (
                    <Todo />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
