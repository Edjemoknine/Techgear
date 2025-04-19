'use client';
import { LayoutGrid, LayoutList } from 'lucide-react';

type Props = {
  Layout: string;
  setLayout: (type: string) => void;
};
const FilterBar = ({ Layout, setLayout }: Props) => {
  const changeLayout = (type: string) => {
    setLayout(type);
  };
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="flex items-center gap-4 text-gray-400">
        {Layout === 'Grid' ? (
          <LayoutList
            onClick={() => changeLayout('List')}
            className="cursor-pointer"
          />
        ) : (
          <LayoutGrid
            onClick={() => changeLayout('Grid')}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default FilterBar;
