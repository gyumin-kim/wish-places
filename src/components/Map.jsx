import React, { Component } from 'react';

class Map extends Component {
  mapContainer = React.createRef();

  render() {
    return (
      <div
        style={{ 
          position: 'absolute', top: '0', left: '0',
          width: '80%', height: '100%', }}
        ref={this.mapContainer}>
      </div>
    );
  }

  componentDidMount() {
    const { latitude, longitude } = this.props.currentCoords;
    const currentCoords = new window.naver.maps.LatLng(latitude, longitude);

    this.map = new window.naver.maps.Map(this.mapContainer.current, {
      center: currentCoords,
      zoom: 11,
    });
  }
}

export default Map;