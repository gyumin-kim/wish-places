import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'
import SearchBar from './components/SearchBar';

class App extends Component {
  state = {
    currentCoords: {
      longitude: 127.105399,
      latitude: 37.3595704,
    },
    mapCenterCoords: {
      longitude: 127.105399,
      latitude: 37.3595704,
    },
  };

  render() {
    const { currentCoords, mapCenterCoords } = this.state;

    return (
      <div className="App">
        <SearchBar currentCoords={currentCoords} />
        <Map 
          currentCoords={currentCoords}
          mapCenterCoords={mapCenterCoords}
        />
      </div>
    );
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const { longitude, latitude } = position.coords;

      this.setState({
        currentCoords: {
          latitude, longitude,
        }
      });
    });
  }
}

export default App;