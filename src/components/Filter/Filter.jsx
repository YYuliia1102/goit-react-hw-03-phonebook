import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, onFilterChange }) => {
    return (
        <div className="mb-3">
            <label htmlFor="filter" className="form-label">Search contacts:</label>
            <input
                type="text"
                id="filter"
                className="form-control"
                value={filter}
                onChange={onFilterChange}
            />
        </div>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired
};

export default Filter;
