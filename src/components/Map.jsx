import React, { Component } from 'react';

class Map extends Component {
  mapContainer = React.createRef();
  map = null;
  currentMarker = null;

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
    this.currentMarker = new window.naver.maps.Marker({
      position: currentCoords,
      title: '현위치',
      map: this.map,
      icon: {
        content: '<div style="width: 20px; height: 20px; background: red;"></div>'
      }
    })
  }

  componentDidUpdate() {
    const { latitude, longitude } = this.props.currentCoords;
    const newCurrentCoords = new window.naver.maps.LatLng(latitude, longitude);
    const { map } = this;

    if (!!this.currentMarker)
      this.currentMarker.setMap(null);

    this.currentMarker = new window.naver.maps.Marker({
      map,
      position: newCurrentCoords,
      title: '현위치',
      icon: {
        content: '<div class="current-marker" style="width: 20px; height: 20px; background: red;"></div>'
      }
    })
    map.setCenter(newCurrentCoords);
  }
}

export default Map;