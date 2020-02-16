import React from 'react';
import { Map, CircleMarker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import * as CoronaData from './CoronaData.json';
import Legend from './LegendControl';
import './Corona.css';

export const icon = new Icon({
  iconUrl:
    'https://www.kk-bestsellers.com/mwimgs/f/e/640mn/img_fe85d2be439b73f88156e2c164bfbc563646039.jpg',
  iconSize: [100, 100],
});

export default function CoronaMaker() {
  const [activePark, setActivePark] = React.useState(null);

  return (
    <Map center={[35.469699, 139.629123]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Legend />
      <Legend />
      <Legend />

      {CoronaData.features.map(park => (
        <CircleMarker
          key={park.properties.PARK_ID}
          center={[park.geometry.coordinates[1], park.geometry.coordinates[0]]}
          onMouseOver={e => {
            e.target.openPopup();
          }}
          onMouseOut={e => {
            e.target.closePopup();
          }}
          radius={20}
          fill="true"
          color="red"
          // icon={icon}
        >
          <Popup>
            <div>
              <h2>{park.properties.NAME}</h2>
              <p>{park.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        </CircleMarker>
      ))}

      {/* {activePark && (
        <Popup
          position={[activePark.geometry.coordinates[1], activePark.geometry.coordinates[0]]}
          anchor="bottom-right"
        >
          <div>
            <h2>{activePark.properties.NAME}</h2>
            <p>{activePark.properties.DESCRIPTIO}</p>
          </div>
        </Popup>
      )} */}
    </Map>
  );
}
