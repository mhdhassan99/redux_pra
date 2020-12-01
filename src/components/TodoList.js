import React from 'react';
import Todo from './Todo'

const TodoList = ({todos, toggleTodo}) => {
    return (
        <div>
            <ul>
                {Todos.map(todo => (
                    <Todo />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
