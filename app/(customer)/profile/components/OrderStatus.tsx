interface StatusStep {
  label: string;
  date: string;
  icon: React.ReactNode;
  isCompleted: boolean;
  isCurrent: boolean;
}

interface OrderStatusProps {
  status: {
    steps: StatusStep[];
  };
}

const OrderStatus: React.FC<OrderStatusProps> = ({ status }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Order Status</h3>
      <div className="space-y-4">
        {status.steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`mr-4 ${step.isCompleted ? "text-green-500" : step.isCurrent ? "text-yellow-500" : "text-gray-500"}`}
            >
              {step.icon}
            </div>
            <div>
              <p className="font-medium">{step.label}</p>
              <p className="text-sm text-gray-400">{step.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderStatus;
