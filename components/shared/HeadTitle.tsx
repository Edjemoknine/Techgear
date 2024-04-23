import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
type Props = {
  title: string;
  description: string;
  link: string;
};
const HeadTitle = ({ title, description, link }: Props) => {
  return (
    <div className="flex flex-col gap-3 items-center my-16 w-full">
      <h1 className="text-7xl text-primary/30 font-black">{title}</h1>
      <h2 className="text-4xl font-semibold text-white -mt-10">
        {description}
      </h2>
      <Link href={link} className="flex items-center gap-3 text-primary">
        view more <ArrowRight />
      </Link>
    </div>
  );
};

export default HeadTitle;
