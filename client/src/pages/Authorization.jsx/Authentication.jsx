import React, { useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import FloatingShape from "../../components/FloatingShape";
import SignUp from "./Signup";
import { Toaster } from "react-hot-toast";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useAuthStore } from "../../store/authStore";
import Verify from "./Verify";


const Authentication = () => {
  const { isCheckingAuth, checkAuth } = useAuthStore();
  const location = useLocation();


  return (
    <div className="bg-gradient-to-br from-gray-900 via-dark-blue-1000 to-blue-600 flex items-center justify-center relative overflow-hidden w-full">
     

      <div className="w-full ">
        <Routes>
          <Route path="/signup" element={<SignUp />} />

          <Route path="/verify-email" element={<Verify />} />
        </Routes>

        <Toaster />
      </div>
    </div>
  );
};

export default Authentication;
