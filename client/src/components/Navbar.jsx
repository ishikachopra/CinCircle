// import Link from 'next/link';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaUserCircle, FaBell, FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
            <header className="flex flex-wrap items-center justify-between px-6 py-4 sticky top-0 bg-gray-950">
                <h1 className="text-xl md:text-2xl font-bold">CinCircle</h1>
                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="text-base  hover:text-purple-500 transition duration-300">
                        DASHBOARD
                    </a>
                    <a href="#" className="text-base  hover:text-purple-500 transition duration-300">
                        MOVIES
                    </a>
                    <a href="#" className="text-base hover:text-purple-500 transition duration-300">
                        JOIN
                    </a>
                    <a href="#" className="text-base  hover:text-purple-500 transition duration-300">
                        UPLOAD
                    </a>
                </nav>
                <div className="flex items-center space-x-6">
                    
                    <div className="relative">
                        <FaBell className="text-2xl hover:text-purple-500 cursor-pointer transition-all duration-300" />
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                            3
                        </span>
                    </div>

                    
                    <div className="relative">
                        <FaUserCircle className="text-3xl hover:text-purple-500 cursor-pointer transition-all duration-300" />
                    </div>
                </div>
            </header>

  );
};

export default Navbar;
