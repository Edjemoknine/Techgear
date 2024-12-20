"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface OrderMapProps {
  order: any;
}

const OrderMap: React.FC<OrderMapProps> = ({ order }) => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map", {
        zoomControl: false,
      }).setView(order.currentLocation, 13);

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 20,
        },
      ).addTo(mapRef.current);
    }

    const map = mapRef.current;

    // Clear existing layers
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker || layer instanceof L.Polyline) {
        map.removeLayer(layer);
      }
    });

    // Custom icons
    const originIcon = L.divIcon({
      className: "custom-icon",
      html: '<div class="w-6 h-6 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white font-bold">O</div>',
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    const destinationIcon = L.divIcon({
      className: "custom-icon",
      html: '<div class="w-6 h-6 rounded-full bg-red-500 border-2 border-white flex items-center justify-center text-white font-bold">D</div>',
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    const currentLocationIcon = L.divIcon({
      className: "custom-icon",
      html: '<div class="w-6 h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white font-bold pulse">C</div>',
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    // Add markers
    L.marker(order.origin, { icon: originIcon }).addTo(map);
    L.marker(order.destination, { icon: destinationIcon }).addTo(map);
    L.marker(order.currentLocation, { icon: currentLocationIcon }).addTo(map);

    // Add route
    const routeCoordinates = [
      order.origin,
      ...order.nextStops,
      order.destination,
    ];
    L.polyline(routeCoordinates, { color: "orange", weight: 3 }).addTo(map);

    // Fit bounds
    map.fitBounds(routeCoordinates);

    // Force a resize of the map after a short delay
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [order]);

  return <div id="map" className="absolute inset-0 z-0"></div>;
};

export default OrderMap;
