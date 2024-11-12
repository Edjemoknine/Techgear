"use client";
import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { Clock, Package, AlertTriangle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const DeliveryTrackingDashboard = () => {
  const [activeDelivery, setActiveDelivery] = useState(null);
  const [deliveries] = useState([
    {
      id: "DV-1220",
      driver: "Damien Smith",
      status: "in-transit",
      origin: "3 Perry St, Campsie NSW 2194",
      destination: "Shop 10.47/644 George St, Sydney NSW 2000",
      currentLocation: [-33.8688, 151.2093],
      eta: "2h 23m",
      distance: "34km",
      isLate: false,
    },
    {
      id: "DV-1221",
      driver: "Marjorie Reilly",
      status: "delayed",
      origin: "3 Perry St, Campsie NSW 2194",
      destination: "Shop 10.47/644 George St, Sydney NSW 2000",
      currentLocation: [-33.8733, 151.2089],
      eta: "14:23",
      distance: "56km",
      isLate: true,
      minutesLate: 65,
    },
  ]);

  const getStatusColor = (status, isLate) => {
    if (isLate) return "text-red-500";
    switch (status) {
      case "in-transit":
        return "text-green-500";
      case "delayed":
        return "text-orange-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <div className="w-96 bg-gray-800 p-4 overflow-y-auto">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-white mb-4">Fleet</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Delivery List */}
        <div className="space-y-4">
          {deliveries.map((delivery) => (
            <Card
              key={delivery.id}
              className={`bg-gray-700 border-none cursor-pointer hover:bg-gray-600 transition-colors ${
                activeDelivery?.id === delivery.id ? "ring-2 ring-blue-500" : ""
              }`}
              onClick={() => setActiveDelivery(delivery)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Package className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-400">{delivery.id}</span>
                  </div>
                  <span
                    className={`text-sm ${getStatusColor(delivery.status, delivery.isLate)}`}
                  >
                    {delivery.isLate
                      ? `${delivery.minutesLate} MIN LATE`
                      : delivery.status}
                  </span>
                </div>

                <div className="text-white font-medium mb-2">
                  {delivery.driver}
                </div>

                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>ETA: {delivery.eta}</span>
                  </div>
                  <div>{delivery.origin}</div>
                  <div>{delivery.destination}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="flex-1 relative">
        <MapContainer
          center={[-33.8688, 151.2093]}
          zoom={13}
          className="h-full w-full"
          style={{ background: "#1a1a1a" }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {deliveries.map((delivery) => (
            <Marker key={delivery.id} position={delivery.currentLocation}>
              <Popup>
                <div className="text-sm">
                  <div className="font-bold">{delivery.driver}</div>
                  <div>ETA: {delivery.eta}</div>
                  <div>Distance: {delivery.distance}</div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default DeliveryTrackingDashboard;
