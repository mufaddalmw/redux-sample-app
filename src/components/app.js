import React, { Component } from 'react'

import SearchBar from '../containers/search_bar'
import WeatherList from '../containers/weather_list'

import LocationSearchInput from '../components/autocomplete'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <LocationSearchInput/>
        <WeatherList />
      </div>
    );
  }
}
