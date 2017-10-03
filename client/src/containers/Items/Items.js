import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Items = () => {
    return (
        <p>Hello World!</p>
    )
}

Items.propTypes = {
    login: PropTypes.func.isRequired
};

export default Items;
