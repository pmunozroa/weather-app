import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LocationList from './../components/LocationList';
import PropTypes from 'prop-types';
import * as actions from './../actions/';
import { getWeatherCities, getCity } from './../reducers/';

class LocationListContainer extends Component{
    /* jshint ignore: start */
    componentDidMount(){
        const {setWeather, setSelectedCity, cities, city} = this.props;
        setWeather(cities);
        setSelectedCity(city);
    }
    

    handleSelectedLocation = city => {
        this.props.setSelectedCity(city);
    }
    render(){
        return (
            <LocationList cities={this.props.citiesWeather} onSelectedLocation={this.handleSelectedLocation} />
        );
    }
    /* jshint ignore: end */
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
};
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
const mapStateToProps = state => ({
    city: getCity(state),
    citiesWeather: getWeatherCities(state),
});
/*const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities)),
    });
*/
export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);