import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface OrderDetailsProps {
  order: any;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="absolute top-2 left-2 w-80 p-6 bg-gray-950 text-white rounded-lg shadow-lg z-10">
      <div className="mb-4">
        <h2 className="text-xl font-bold">#{order.id}</h2>
        <p className="text-green-500">{order.status}</p>
      </div>
      <div className="mb-2">
        <p className="font-medium">Current Position</p>
        <p className="text-sm text-muted-foreground">
          {order.currentPositionName}
        </p>
      </div>
      <div className="mb-2">
        <p className="font-medium">Estimated Delivery</p>
        <p className="text-sm text-muted-foreground">
          {order.estimatedDelivery}
        </p>
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-[#2563eb] py-2 border-t border-gray-700"
      >
        <span>See more details</span>
        {isExpanded ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isExpanded && (
        <div className="mt-4 max-h-96 overflow-y-auto pb-4">
          <h3 className="font-semibold mb-2">Route Details</h3>
          {order.route.map((stop: any, index: number) => (
            <div key={index} className="flex items-start mb-4">
              <div
                className={`w-4 h-4 rounded-full mt-1 mr-3 ${stop.completed ? 'bg-green-500' : 'bg-gray-500'}`}
              ></div>
              <div>
                <p className="font-medium">{stop.name}</p>
                <p className="text-sm text-gray-400">{stop.date}</p>
                {stop.description && (
                  <p className="text-sm">{stop.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
