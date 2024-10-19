import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import L, { DivIcon } from 'leaflet';
import { MarkerData, StateData } from '../utilities/types';
import { useEffect, useState } from 'react';

// Fix for Leaflet marker icons
(L.Icon.Default.prototype as any)._getIconUrl = undefined;
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapComponent = ({mapData}:{mapData:StateData[]}) => {
  const [markerData, setMarkerData] = useState<MarkerData[]>([]);

  useEffect(()=>{
    const resultData = mapData.map((state:StateData)=>({name:state.name, position:[state.location.lat,state.location.lng] as [number,number], totalCases:state.totalCases, activeCases:state.activeCases, recoveredCases:state.recoveredCases, deaths:state.deaths }));
    setMarkerData(resultData);
  },[mapData]);

  return (
    <MapContainer center={[20.5937, 80.9629]} zoom={5} scrollWheelZoom={true} attributionControl={false} style={{ height: '100%', width: '100%' }} >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
      {/* Loop through marker data to create markers */}
      {
        markerData.map((marker:MarkerData, index) => (
        <Marker key={index} position={marker.position} icon={new DivIcon({
          className: 'custom-marker-icon',
          html: `<div style="position: relative;">
                <img src="${L.Icon.Default.prototype.options.iconUrl}" style="width: 25px; height: 41px;" />
                <span style="position: absolute; bottom: -20px; left: 58%; transform: translateX(-50%); background: #e5e5e5; border-radius: 50%; padding: 2px 6px; font-size: 10px; border: 2px solid">${marker.totalCases}</span>
                </div>`,
          iconSize: [25, 41], // Match default icon size
          iconAnchor: [12.5, 41], // Center the icon
          popupAnchor: [0, -41] // Adjust popup position
        })}>
        <Popup>
            <div>
                <div style={{textAlign:"center",marginBottom:"6px"}}><strong style={{justifyContent:"center"}}>{marker.name}</strong></div>
                Total Cases: {marker.totalCases}
                <br />
                Active: {marker.activeCases}
                <br />
                Recovered: {marker.recoveredCases}
                <br />
                Deaths: {marker.deaths}
            </div>
            </Popup>
        </Marker>
      ))
    }
  </MapContainer>
)}

export default MapComponent;