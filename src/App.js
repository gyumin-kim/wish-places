import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'

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
        <Map 
          currentCoords={currentCoords}
          mapCenterCoords={mapCenterCoords}
        />
      </div>
    );
  }
}

export default App;