import React, { Component } from 'react';
import axios from "axios";
import "./Weather.css";

const API = 'http://api.weatherstack.com/current';

const params = {
    access_key: process.env.REACT_APP_API_KEY,
    query: 'Helsinki',
};


class Weather extends Component {
    state = {
        weather: {
            request: {},
            location: {},
            current: {},
        },
        isLoading: false,
    }

    componentDidMount() {
        this.setState({isLoading:true})
        axios.get(API, {params}).then(response => this.setState({weather: response.data, isLoading: false}));
    }

    render() {
        return this.state.isLoading ? ( <p>Weather loading...</p> ) : (
            <section className="weather">
                <h2>Local weather</h2>
                <p className="weather-info">
                Current temperature in {this.state.weather.location.name} is {this.state.weather.current.temperature}&deg;C and feels like {this.state.weather.current.feelslike}&deg;C 
                <img src={this.state.weather.current.weather_icons} />
                </p>
            </section>
        );
    }
}

export default Weather;