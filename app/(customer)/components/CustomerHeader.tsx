import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
const Header = () => {
  return (
    <header className="border-b border-gray-800 bg-black/50 backdrop-blur-lg sticky top-0 z-20">
      <div className="container flex h-16 items-center justify-between">
        <h1 className="text-xl font-bold">My Account</h1>
        <Button variant="secondary" className="border-gray-700">
          <Settings className="h-4 w-4 mr-2" />
          Account Settings
        </Button>
      </div>
    </header>
  );
};

export default Header;
