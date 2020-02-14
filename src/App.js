import Leaflet from 'leaflet';
import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import CoronaMaker from './components/CoronaMaker';

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/';

class App extends Component {
  render() {
    return <CoronaMaker />;
  }
}

export default App;
