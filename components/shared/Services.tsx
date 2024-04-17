import React from "react";
import HeadTitle from "./HeadTitle";
import {
  AppWindow,
  BookMarked,
  DollarSign,
  HeadphonesIcon,
} from "lucide-react";
import ServiceCard from "./ServiceCard";
const servicesList = [
  {
    icon: BookMarked,
    title: "Lifetime Guarantee",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit, quisquam at cupiditate soluta error ut! Sequi pariatur, aspernatur voluptatum laudantium modi, unde nesciunt esse quae commodi ab, illo eveniet!",
  },
  {
    icon: AppWindow,
    title: "Free Software Updates",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit, quisquam at cupiditate soluta error ut! Sequi pariatur, aspernatur voluptatum laudantium modi, unde nesciunt esse quae commodi ab, illo eveniet!",
  },
  {
    icon: DollarSign,
    title: "Good Price",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit, quisquam at cupiditate soluta error ut! Sequi pariatur, aspernatur voluptatum laudantium modi, unde nesciunt esse quae commodi ab, illo eveniet!",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit, quisquam at cupiditate soluta error ut! Sequi pariatur, aspernatur voluptatum laudantium modi, unde nesciunt esse quae commodi ab, illo eveniet!",
  },
];
const Services = () => {
  return (
    <div className="mx-auto max-w-6xl px-8 grid place-items-center min-h-screen">
      <HeadTitle
        title="SERVICES"
        link="/services"
        description="We proved more then high-techproducts!"
      />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {servicesList.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
