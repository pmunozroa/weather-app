import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/';
import LinearProgress from '@material-ui/core/LinearProgress';
import './styles.css';
/* jshint ignore: start */
const renderProgress = () => {
    return (<div className="loading"><h3><p>Cargando pronóstico extendido</p></h3><LinearProgress /></div>);
}

const renderForecastItemDays = (forecastData) => {
    return forecastData.map( forecast => (<ForecastItem key={ `${forecast.weekDay}${forecast.hour}` } weekDay={ forecast.weekDay } hour={ forecast.hour } data={ forecast.data } />));
}

const ForecastExtended = ({city, forecastData}) => (
    
        <div className="forecastExtended">
            <h1 className="forecast-title">Pronóstico extendido <u>{ city }</u></h1>
            {forecastData ? renderForecastItemDays(forecastData) : renderProgress() }
        </div>
    /* jshint ignore: end */
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};

export default ForecastExtended;