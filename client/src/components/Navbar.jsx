import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Film } from "lucide-react";
import { useAuthStore } from "../store/authStore";
import JoinRoom from "./Join";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const { user } = useAuthStore();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-gray-900/80 border-b border-purple-500/20"
    >
      <div className=" px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Film className="w-8 h-8 text-purple-500" />
          </motion.div>
          <span className="text-2xl font-bold text-white">CineCircle</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <motion.a
            whileHover={{ scale: 1.05, color: "#a78bfa" }}
            className="text-gray-300 transition"
          >
            <NavLink to="/"> Home </NavLink>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, color: "#a78bfa" }}
            className="text-gray-300 transition"
          >
            <NavLink to="/movies"> Movies </NavLink>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, color: "#a78bfa" }}
            className="text-gray-300 transition hover:cursor-pointer"
            onClick={() => setIsJoinModalOpen(true)}
          >
            Join
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, color: "#a78bfa" }}
            href="#"
            className="text-gray-300 transition"
          >
            Pricing
          </motion.a>
        </div>
        {user ? (
          <span className="text-white font-medium">{user.name}</span>
        ) : (
          <div className="flex">
            <NavLink to="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-6 py-2 rounded-none first:rounded-l-full last:rounded-r-full hover:bg-purple-700 transition shadow-lg shadow-purple-500/20"
              >
                Sign Up
              </motion.button>
            </NavLink>
            <NavLink to="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-6 py-2 rounded-none first:rounded-l-full last:rounded-r-full hover:bg-purple-700 transition shadow-lg shadow-purple-500/20"
              >
                Sign In
              </motion.button>
            </NavLink>
          </div>
        )}
      </div>
      <AnimatePresence>
        {isJoinModalOpen && (
          <JoinRoom onClose={() => setIsJoinModalOpen(false)} />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
