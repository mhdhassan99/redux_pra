import { connect } from 'react-redux'
import TodoList from '../components/TodoList';
import { visibilityFilters } from '../actions'


const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case visibilityFilters.SHOW_ALL:
            return todos;
        case visibilityFilters.SHOW_COMPLETED:
            return todos.filter(task => task.completed);
        case visibilityFilters.SHOW_ACTIVE:
            return todos.filter(task => !task.completed); 
        default:
            throw new Error('Unknown Filter ' + filter)
    }
}

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

export default connect(mapStateToProps)(TodoList);