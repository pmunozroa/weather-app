import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity, wind}) => (
    /* jshint ignore:start */
    <div className="weatherExtraInfoCont">
        <span className="extraInfoText">{`Humedad: ${humidity}%`}</span>
        <span className="extraInfoText">{`Vientos: ${wind}`}</span>
    </div>
    /* jshint ignore:end */
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;