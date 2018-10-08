import getUrlForecastByCity from './../services/getUrlForecastByCity';
import getUrlWeatherByCity from './../services/getUrlWeatherByCity';
import transformForecast from './../services/transformForecast';
import transformWeather from './../services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = value =>({ type: SET_CITY, value});
const setForecastData = value => ({ type: SET_FORECAST_DATA, value });

export const setSelectedCity = value => {
  return (dispatch, getState) => {

    const api_weather = getUrlForecastByCity(value);

    dispatch(setCity(value));
    
    const state = getState();

    const date = state.cities[value] && state.cities[value].forecastDataDate;

    const now = new Date();

    if(date && (now - date) < (1* 60 * 1000)){
      return;
    }

    return fetch(api_weather)

        .then( data => data.json())

        .then(data => {

            const forecastData = transformForecast(data);

            dispatch(setForecastData({city: value, forecastData}));
          });
  };
};

export const setWeather = cities => {
  return dispatch => {
    cities.forEach( city => {
      dispatch(getWeatherCity(city));
      const api_weather = getUrlWeatherByCity(city);

      fetch(api_weather)

            .then(data => data.json())

            .then(w_data => {
              const weather = transformWeather(w_data);
              dispatch(setWeatherCity({city, weather}));
      });
    });
  };
};


const getWeatherCity = value => ({type: GET_WEATHER_CITY, value});
const setWeatherCity = value => ({type: SET_WEATHER_CITY, value});