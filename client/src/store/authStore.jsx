import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:8000/api/auth"
    : "/api/auth";

axios.defaults.withCredentials = true;

export const useAuthStore = create(persist((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,


  signup: async (email, password, name, phoneNumber, gender, dateOfBirth) => {
    set({ isLoading: true, error: null });
  
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        email,
        password,
        name,
        phoneNumber,
        gender,
        dateOfBirth
      });
  
      set({ isLoading: false });
      return response.data;  // Return successful response
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error signing up";
  
      set({
        error: errorMessage,
        isLoading: false,
      });
  
      return { error: errorMessage }; // Return error object
    } finally {
      set({ isLoading: false }); // Ensure `isLoading` is reset in all cases
    }
  }
  
  // signup: async (email, password, name, phoneNumber, gender,dateOfBirth) => {
  //   set({ isLoading: true, error: null });
  //   try {
  //     const response = await axios.post(`${API_URL}/signup`, {
  //       email,
  //       password,
  //       name,
  //       phoneNumber,
  //       gender,
  //       dateOfBirth
  //     });
  //     set({
  //       user: response.data.user,
  //       isAuthenticated: true,
  //       isLoading: false,
  //     });
  //   } catch (error) {
  //     set({
  //       error: error.response.data.message || "Error signing up",
  //       isLoading: false,
  //     });
  //     throw error;
  //   }
  // }
  ,
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      // console.log("User after login:", response.data.user);
      set({
        isAuthenticated: true,
        user: response.data.user,
        error: null,
        isLoading: false,
      });
      // console.log("Updated user in Zustand:", useAuthStore.getState().user);
      
    } catch (error) {
      console.error("Login error:", error.response?.data || error);
      set({
        error: error.response?.data?.message || "Error logging in",
        isLoading: false,
      });
      throw error;
    }
  },

  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await axios.post(`${API_URL}/logout`);
      set({
        user: null,
        isAuthenticated: false,
        error: null,
        isLoading: false,
      });
    } catch (error) {
      set({ error: "Error logging out", isLoading: false });
      throw error;
    }
  },
  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/verify-email`, { code });
      set({
        isLoading: false,
      });
      return response.data;
    } catch (error) {
      set({
        error: error.response.data.message || "Error verifying email",
        isLoading: false,
      });
      throw error;
    }
  },
  checkAuth: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({ isCheckingAuth: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/check-auth`);
      set({
        user: response.data.user,
        isAuthenticated: true,
        isCheckingAuth: false,
      });
    } catch (error) {
      set({ error: null, isCheckingAuth: false, isAuthenticated: false });
    }
  },
  forgotPassword: async (email) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/forgot-password`, {
        email,
      });
      set({ message: response.data.message, isLoading: false });
    } catch (error) {
      set({
        isLoading: false,
        error:
          error.response.data.message || "Error sending reset password email",
      });
      throw error;
    }
  },
  resetPassword: async (token, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/reset-password/${token}`, {
        password,
      });
      set({ message: response.data.message, isLoading: false });
    } catch (error) {
      set({
        isLoading: false,
        error: error.response.data.message || "Error resetting password",
      });
      throw error;
    }
  },
})));
