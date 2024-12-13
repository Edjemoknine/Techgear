"use client";

import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import OrderStatus from "../../components/OrderStatus";
import OrderInfo from "../../components/OrderInfo";
import { CheckCircle, Clock1, Truck } from "lucide-react";

// Fix for default marker icon in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

interface OrderDetailsProps {
  orderId: string;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ orderId }) => {
  //const [order, setOrder] = useState<any>(null);
  const [currentLocation, setCurrentLocation] = useState<[number, number]>([
    51.505, -0.09,
  ]);
  const [routeCoordinates, setRouteCoordinates] = useState<[number, number][]>(
    [],
  );

  // Mock data
  const order = {
    id: 456789,
    trackingId: "sdfgdf5e34534",
    courier: "Express Delivery",
    deliveryAddress: "123-456 South Request Street, Sydney 2000 NSW, Australia",
    item: 'MacBook Pro 16" M3 12-CoreCPU 18-CoreGPU 36/512GB Space Black',
    currentLocation: [-33.8688, 151.2093], // Sydney coordinates
    routeCoordinates: [
      [-33.8688, 151.2093],
      [-33.8712, 151.2045],
      [-33.8735, 151.2],
      [-33.8758, 151.1955],
    ],
    status: {
      steps: [
        {
          label: "Order Placed",
          date: "31 Dec 2023, 10:45",
          icon: <CheckCircle className="h-6 w-6" />,
          isCompleted: true,
          isCurrent: false,
        },
        {
          label: "In Transit",
          date: "1 Jan 2024, 18:04",
          icon: <Truck className="h-6 w-6" />,
          isCompleted: false,
          isCurrent: true,
        },
        {
          label: "Delivered",
          date: "Estimated 3 Jan 2024",
          icon: <Clock1 className="h-6 w-6" />,
          isCompleted: false,
          isCurrent: false,
        },
      ],
    },
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white">
      <div className="md:w-1/3 p-4 overflow-y-auto">
        <OrderInfo order={order} />
        <OrderStatus status={order.status} />
      </div>
      <div className="md:w-2/3 h-full">
        <MapContainer
          center={currentLocation}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={currentLocation}>
            <Popup>Current Location</Popup>
          </Marker>
          <Polyline positions={routeCoordinates} color="red" />
        </MapContainer>
      </div>
    </div>
  );
};

export default OrderDetails;
