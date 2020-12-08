import React from 'react';
import FilterLink from '../containers/FilterLink';

const Footer = () => {
    <div>
        <span>Show: </span>
        <FilterLink>All</FilterLink>
        <FilterLink>Active</FilterLink>
        <FilterLink>Completed</FilterLink>
    </div>

}

export default Footer;
