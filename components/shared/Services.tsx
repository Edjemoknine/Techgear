import React from 'react';
import HeadTitle from './HeadTitle';
import {
  AppWindow,
  BookMarked,
  DollarSign,
  HeadphonesIcon,
} from 'lucide-react';
import ServiceCard from './ServiceCard';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Laptop, PiggyBank, Shield } from 'lucide-react';
const servicesList = [
  {
    icon: BookMarked,
    title: 'Lifetime Guarantee',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit, quisquam at cupiditate soluta error ut! Sequi pariatur, aspernatur voluptatum laudantium modi, unde nesciunt esse quae commodi ab, illo eveniet!',
  },
  {
    icon: AppWindow,
    title: 'Free Software Updates',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit, quisquam at cupiditate soluta error ut! Sequi pariatur, aspernatur voluptatum laudantium modi, unde nesciunt esse quae commodi ab, illo eveniet!',
  },
  {
    icon: DollarSign,
    title: 'Good Price',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit, quisquam at cupiditate soluta error ut! Sequi pariatur, aspernatur voluptatum laudantium modi, unde nesciunt esse quae commodi ab, illo eveniet!',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit, quisquam at cupiditate soluta error ut! Sequi pariatur, aspernatur voluptatum laudantium modi, unde nesciunt esse quae commodi ab, illo eveniet!',
  },
];
const Services = () => {
  return (
    <div className="mx-auto max-w-7xl px-8 grid place-items-center min-h-[600px]">
      {' '}
      <HeadTitle
        title="SERVICES"
        link="/services"
        description="We proved more then high-tech products!"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {[
          {
            icon: Shield,
            title: 'Lifetime Guarantee',
            description: 'Quality assurance that lasts forever',
          },
          {
            icon: Laptop,
            title: 'Free Software Updates',
            description: 'Stay current with latest features',
          },
          {
            icon: PiggyBank,
            title: 'Good Price',
            description: 'Competitive pricing for premium gear',
          },
          {
            icon: HeadphonesIcon,
            title: '24/7 Support',
            description: 'Round-the-clock customer assistance',
          },
        ].map((feature, index) => (
          <Card key={index} className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <feature.icon className="h-12 w-12 text-[#0066FF] mb-4" />
              <h3 className="text-white font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      {/*<div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {servicesList.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
        </div>*/}
    </div>
  );
};

export default Services;
