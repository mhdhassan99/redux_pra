import React from 'react';
import FilterLink from '../containers/FilterLink';
import { visibilityFilters } from '../actions';

const Footer = () => (
    <div className='all-buttons-container'>
        <span>Show: </span>
        
        <FilterLink className='all-button' filter={ visibilityFilters.SHOW_ALL } >All</FilterLink>
        <FilterLink className='active-button' filter={ visibilityFilters.SHOW_ACTIVE }>Active</FilterLink>
        <FilterLink className='completed-' filter={ visibilityFilters.SHOW_COMPLETED }>Completed</FilterLink>
    </div>
);

export default Footer;
