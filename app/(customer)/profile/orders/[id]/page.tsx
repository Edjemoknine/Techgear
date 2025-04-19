'use client';

import { useState, useEffect } from 'react';
import OrderMap from '../components/OrderMap';
import OrderDetails from '../components/OrderDetails';

const OrderTrackingDashboard: React.FC = () => {
  const order = {
    id: '456789',
    status: 'In Progress',
    currentPositionName: 'Sydney Distribution Center',
    estimatedDelivery: '3 Jan 2024',
    origin: [-33.8688, 151.2093],
    destination: [-33.883, 151.2167],
    currentLocation: [-33.8735, 151.21],
    nextStops: [
      [-33.8758, 151.2055],
      [-33.879, 151.21],
    ],
    route: [
      {
        name: 'Order Placed',
        date: '31 Dec 2023, 10:45',
        description: 'Delivery order created through Apple.com',
        completed: true,
      },
      {
        name: 'Picked Up',
        date: '1 Jan 2024, 14:24',
        description: 'Aus post created label for item and onboarded',
        completed: true,
      },
      {
        name: 'In Transit',
        date: '1 Jan 2024, 18:04',
        description: 'Package is in transit to destination',
        completed: false,
      },
      {
        name: 'Out for Delivery',
        date: '3 Jan 2024, 09:00',
        description: 'Package is out for delivery',
        completed: false,
      },
      {
        name: 'Delivered',
        date: '3 Jan 2024',
        description: 'Estimated delivery time',
        completed: false,
      },
    ],
  };

  return (
    <div className="bg-black text-white p-4">
      <div className="min-h-screen  bg-gray-900 text-white relative rounded-lg overflow-hidden">
        <OrderMap order={order} />
        <OrderDetails order={order} />
      </div>
    </div>
  );
};

export default OrderTrackingDashboard;
