import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({ city }) => (
    /* jshint ignore: start */
    <div className="locationCont">
        <h1>{city}</h1>
    </div>
    /* jshint ignore: end */
);    

Location.propTypes = {
    city: PropTypes.string.isRequired,
};

export default Location;