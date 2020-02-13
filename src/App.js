import React, { Component } from 'react';
import './App.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

class App extends Component {
  componentDidMount() {
    const position = [51.505, -0.09];
    const map = L.map('map').setView(position, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(position)
      .addTo(map)
      .bindPopup('A pretty CSS3 popup. <br> Easily customizable.');
  }

  render() {
    return <div className="App" id="map"></div>;
  }
}

export default App;
