import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

/* jshint ignore:start */
const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
        <div className = "weatherLocationCont" onClick = { onWeatherLocationClick } >
            <Location city = { city } /> { data ? < WeatherData data = { data }/> : <CircularProgress size={50} /> }
        </div>
);
/* jshint ignore:end */

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
};

export default WeatherLocation;