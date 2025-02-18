// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import {
//   FaUserCircle,
//   FaBell,
//   FaBars,
//   FaTimes,
//   FaHome,
//   FaFilm,
//   FaUsers,
//   FaUpload,
// } from "react-icons/fa";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 w-full bg-opacity-90 backdrop-blur-md shadow-md bg-gray-950">
//     {/* </header> <header className="sticky top-0 z-50 w-full bg-opacity-90 backdrop-blur-md shadow-md bg-gray-950 font-sans"> */}

//       <div className="container flex items-center justify-between w-full md:w-full sm:w-full">
//         {/* Logo */}
//         <div className="flex items-center space-x-4">
//           <img
//             src="/logo.png"
//             alt="CinCircle Logo"
//             className="h-14 w-auto object-contain" // Increased height for better visibility
//           />
//           <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide">
//             CinCircle
//           </h1>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-8">
//           <NavLink
//             to="/"
//             className="flex items-center gap-2 text-white font-medium hover:text-purple-400 transition duration-300"
//           >
//             <FaHome className="text-lg" /> HOME
//           </NavLink>
//           <NavLink
//             to="/movies"
//             className="flex items-center gap-2 text-white font-medium hover:text-purple-400 transition duration-300"
//           >
//             <FaFilm className="text-lg" /> MOVIES
//           </NavLink>
//           <a
//             href="#"
//             className="flex items-center gap-2 text-white font-medium hover:text-purple-400 transition duration-300"
//           >
//             <FaUsers className="text-lg" /> JOIN
//           </a>
//           <a
//             href="#"
//             className="flex items-center gap-2 text-white font-medium hover:text-purple-400 transition duration-300"
//           >
//             <FaUpload className="text-lg" /> UPLOAD
//           </a>
//         </nav>

//         {/* Icons Section */}
//         <div className="flex items-center space-x-6">
//           {/* Notifications */}
//           <div className="relative">
//             <FaBell className="text-2xl text-white hover:text-purple-400 cursor-pointer transition-all duration-300" />
//             <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
//               3
//             </span>
//           </div>

//           {/* User Icon */}
//           <div className="relative">
//             <FaUserCircle className="text-3xl text-white hover:text-purple-400 cursor-pointer transition-all duration-300" />
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-white text-2xl focus:outline-none"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-opacity-95 backdrop-blur-md absolute top-16 left-0 w-full shadow-xl">
//           <nav className="flex flex-col items-center space-y-6 py-6">
//             <NavLink
//               to="/"
//               className="flex items-center gap-2 text-white text-lg font-medium hover:text-purple-400 transition duration-300"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <FaHome /> HOME
//             </NavLink>
//             <NavLink
//               to="/movies"
//               className="flex items-center gap-2 text-white text-lg font-medium hover:text-purple-400 transition duration-300"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <FaFilm /> MOVIES
//             </NavLink>
//             <a
//               href="#"
//               className="flex items-center gap-2 text-white text-lg font-medium hover:text-purple-400 transition duration-300"
//             >
//               <FaUsers /> JOIN
//             </a>
//             <a
//               href="#"
//               className="flex items-center gap-2 text-white text-lg font-medium hover:text-purple-400 transition duration-300"
//             >
//               <FaUpload /> UPLOAD
//             </a>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;








import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaUserCircle,
  FaBell,
  FaBars,
  FaTimes,
  FaHome,
  FaFilm,
  FaUsers,
  FaUpload,
} from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex flex-col items-center w-full py-4 bg-gray-950">
      {/* Logo & Name (Positioned Outside the Navbar) */}
      <div className="absolute left-6 top-2 flex items-center space-x-4 px-4 py-2 rounded-full shadow-lg">
        <img
          src="/logo.png"
          alt="CinCircle Logo"
          className="h-14 w-auto object-contain"
        />
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide">
          CinCircle
        </h1>
      </div>

      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 w-[90%] md:w-[70%] bg-black bg-opacity-90 backdrop-blur-md shadow-lg rounded-full px-8 py-3 flex justify-between items-center">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className="text-white font-medium hover:text-purple-400 transition"
          >
            <FaHome className="inline-block mr-1 text-lg" /> HOME
          </NavLink>
          <NavLink
            to="/movies"
            className="text-white font-medium hover:text-purple-400 transition"
          >
            <FaFilm className="inline-block mr-1 text-lg" /> MOVIES
          </NavLink>
          <a
            href="#"
            className="text-white font-medium hover:text-purple-400 transition"
          >
            <FaUsers className="inline-block mr-1 text-lg" /> JOIN
          </a>
          <a
            href="#"
            className="text-white font-medium hover:text-purple-400 transition"
          >
            <FaUpload className="inline-block mr-1 text-lg" /> UPLOAD
          </a>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center space-x-6">
          {/* Notifications */}
          <div className="relative">
            <FaBell className="text-2xl text-white hover:text-purple-400 cursor-pointer transition-all" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </div>

          {/* User Icon */}
          <FaUserCircle className="text-3xl text-white hover:text-purple-400 cursor-pointer transition-all" />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-950 bg-opacity-95 backdrop-blur-md absolute top-20 left-0 w-full rounded-b-2xl shadow-xl">
          <nav className="flex flex-col items-center space-y-6 py-6">
            <NavLink
              to="/"
              className="text-white text-lg font-medium hover:text-purple-400 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaHome className="inline-block mr-1" /> HOME
            </NavLink>
            <NavLink
              to="/movies"
              className="text-white text-lg font-medium hover:text-purple-400 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaFilm className="inline-block mr-1" /> MOVIES
            </NavLink>
            <a
              href="#"
              className="text-white text-lg font-medium hover:text-purple-400 transition"
            >
              <FaUsers className="inline-block mr-1" /> JOIN
            </a>
            <a
              href="#"
              className="text-white text-lg font-medium hover:text-purple-400 transition"
            >
              <FaUpload className="inline-block mr-1" /> UPLOAD
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
