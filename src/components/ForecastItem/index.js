import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';

const ForecastItem = ({ weekDay, hour, data }) => {
    /* jshint ignore: start */
    return(
    <div>
        <div>
            {`${weekDay} - ${hour}:00 Hrs.`}
        </div>
        <WeatherData data={data} />
    </div>);
    /* jshint ignore: end */
};

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }).isRequired,
}

export default ForecastItem;