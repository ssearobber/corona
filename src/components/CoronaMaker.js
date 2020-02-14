import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import * as CoronaData from './CoronaData.json';
import './Corona.css';

export const icon = new Icon({
  iconUrl: '/skateboarding.svg',
  iconSize: [25, 25],
});

export default function CoronaMaker() {
  const [activePark, setActivePark] = React.useState(null);

  return (
    <Map center={[35.469699, 139.629123]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {CoronaData.features.map(park => (
        <Marker
          key={park.properties.PARK_ID}
          position={[park.geometry.coordinates[1], park.geometry.coordinates[0]]}
          onClick={() => {
            setActivePark(park);
          }}
          // icon={icon}
        />
      ))}

      {activePark && (
        <Popup
          position={[activePark.geometry.coordinates[1], activePark.geometry.coordinates[0]]}
          anchor="bottom-right"
          onClose={() => {
            setActivePark(null);
          }}
        >
          <div>
            <h2>{activePark.properties.NAME}</h2>
            <p>{activePark.properties.DESCRIPTIO}</p>
          </div>
        </Popup>
      )}
    </Map>
  );
}
