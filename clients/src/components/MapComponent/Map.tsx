import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import L, { LatLngExpression, LeafletMouseEvent } from "leaflet";
import "../../styles/leaflet.css";

// LocationMarker component handles updating the marker on the map
const LocationMarker: React.FC = () => {
  // State to hold the marker's position; it can be a LatLngExpression or null
  const [position, setPosition] = useState<LatLngExpression | null>([51.505, -0.09]);

  // Use map events to detect clicks and update marker position
  useMapEvents({
    click: (e: LeafletMouseEvent) => {
      // Update the position with the latitude and longitude of the click event
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });

  // Render a marker if a position exists
  return position ? (
    <Marker position={position} icon={new L.Icon.Default()}>
      <Popup>You are here</Popup>
    </Marker>
  ) : null;
};

// Main MapComponent renders the map and includes the LocationMarker component
const MapComponent: React.FC = () => {
  // State for the zoom level (type number)
  const [zoomLevel, setZoomLevel] = useState<number>(13);

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <MapContainer center={[51.505, -0.09]} zoom={zoomLevel} style={{ height: "100%", width: "100%" }}>
        {/* Base tiles for the map */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Marker that updates based on user interaction */}
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
