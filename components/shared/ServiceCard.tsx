import { LucideIcon } from "lucide-react";
import React, { ReactNode } from "react";
type Props = {
  title: string;
  description: string;
  icon: LucideIcon;
};
const ServiceCard = ({ service }: { service: Props }) => {
  return (
    <div className="bg-neutral-600 rounded-xl p-4 flex ">
      <service.icon size={50} className="px-4 text-black w-20" />
      <div className="flex-1 flex flex-col gap-3">
        <h3 className="text-xl font-bold text-white">{service.title}</h3>
        <p className="text-gray-400">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
