import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Map = ({ data }: { data: any }) => {
  const [activeCountry, setActiveCountry] = useState(null);

  const handleCountryClick = (country: any) => {
    setActiveCountry(country);
  };

  const getCountryColor = (country: any) => {
    switch (country.code) {
      case "US":
        return "red";
      case "GB":
        return "blue";
      case "DE":
        return "green";
      case "QA":
        return "yellow";
      case "TR":
        return "orange";
      default:
        return "gray";
    }
  };

  const customMarkerIcon = (color: any) => {
    return L.icon({
      iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
  };

  return (
    <MapContainer
      center={[40, 0]}
      zoom={1}
      style={{ height: "400px", width: "700px" }}
      className="dark-mode"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {data.map((country: any) => (
        <Marker
          key={country.code}
          position={[country.latitude, country.longitude]}
          icon={customMarkerIcon(getCountryColor(country))}
          eventHandlers={{
            click: () => handleCountryClick(country),
          }}
        >
          <Popup>
            <div>
              <img
                src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                alt={country.name}
              />
              <h3>{country.name}</h3>
              <p>Customers: {country.customers}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
