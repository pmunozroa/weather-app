import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';

const WeatherData = ({data: {temperature, weatherState, humidity, wind }}) => {
    /* jshint ignore: start */
    return (<div className="weatherDataCont">
    <WeatherTemperature temperature={temperature} weatherstate={weatherState}/>
    <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>);
    /* jshint ignore: end */
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }).isRequired,
};

export default WeatherData;