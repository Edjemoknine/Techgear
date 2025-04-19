import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
type Props = {
  title: string;
  description: string;
  link: string;
};
const HeadTitle = ({ title, description, link }: Props) => {
  return (
    <div className="flex flex-col gap-3 items-center text-center pt-16 md:pt-6 mb-6 md:mb-0  w-full">
      <h1 className="text-5xl lg:text-7xl text-primary/30 font-black">
        {title}
      </h1>
      <h2 className="text-2xl lg:text-4xl font-semibold text-white md:-mt-10">
        {description}
      </h2>
      <Link href={link} className="flex items-center gap-3 text-primary">
        view more <ArrowRight />
      </Link>
    </div>
  );
};

export default HeadTitle;
