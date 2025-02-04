// import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="py-8 relative bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="font-extrabold text-[24px] text-white">CINECIRCLE</h2>
        <div className="relative">
          <img
            src="/menu.svg"
            alt="menu"
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg">
              <Link href="/auth/login">
                <span className="block px-4 py-2 text-black hover:bg-gray-200 cursor-pointer">Login</span>
              </Link>
              <a href="/auth/signup">
                <span className="block px-4 py-2 text-black hover:bg-gray-200 cursor-pointer">Signup</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
