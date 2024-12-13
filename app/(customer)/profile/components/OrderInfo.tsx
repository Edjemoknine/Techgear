import { ReactNode } from "react";

type OrderStatusStep = {
  label: string;
  date: string;
  icon: ReactNode; // Since icons are React components, use ReactNode
  isCompleted: boolean;
  isCurrent: boolean;
};

type OrderStatus = {
  steps: OrderStatusStep[];
};

type Order = {
  id: number;
  trackingId: string;
  courier: string;
  deliveryAddress: string;
  item: string;
  currentLocation: [number, number]; // Tuple for latitude and longitude
  routeCoordinates: [number, number][]; // Array of lat/lng tuples
  status: OrderStatus;
};

const OrderInfo: React.FC<Order> = ({ order }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-4">#{order.id}</h2>
      <p className="text-gray-400 mb-2">Tracking ID: {order.trackingId}</p>
      <p className="mb-2">Courier: {order.courier}</p>
      <p className="mb-2">Delivery Address: {order.deliveryAddress}</p>
      <p>Item: {order.item}</p>
    </div>
  );
};

export default OrderInfo;
