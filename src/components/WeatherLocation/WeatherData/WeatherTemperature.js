import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { SUN, CLOUD, RAIN, SNOW, THUNDER, DRIZZLE } from './../../../constants/weather';
import './styles.css';

const icons = {
    [SUN]: "day-sunny",
    [CLOUD]: "cloud",
    [THUNDER]: "day-thunderstorm",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [DRIZZLE]: "day-showers"
};
const getWeatherIcon = weatherState => {
    /* jshint ignore:start */
    const icon = icons[weatherState];
    const sizeIcon = "4x";
    if(icon)
        return <WeatherIcons className="wicon" name={ icon } size={ sizeIcon } />;
    else
        return <WeatherIcons className="wicon" name="day-sunny" size={ sizeIcon } />;
    /* jshint ignore:end */
};
const WeatherTemperature = ({ temperature, weatherstate }) => (
    /* jshint ignore:start */
    <div className="weatherTemperatureCont">
        { getWeatherIcon(weatherstate) }
        <span className="temperature">{`${temperature}`}</span><span className="temperatureType">{` ℃`}</span>
    </div>
    /* jshint ignore:end */
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherstate: PropTypes.string.isRequired,
};

export default WeatherTemperature;