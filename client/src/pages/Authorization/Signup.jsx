import React, { useState } from "react";
import { motion } from "framer-motion";
import Input from "../../components/Input";
import {
  User,
  Mail,
  Lock,
  Loader,
  Phone,
  SquareUserRound,
  Calendar,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../../components/PasswordStrength";
import { useAuthStore } from "../../store/authStore";
import Select from "../../components/Select";
import toast from "react-hot-toast";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Added Confirm Password
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const { signup, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Trim input values
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phoneNumber.trim();
    const trimmedPassword = password.trim();
    const trimmedConfirmPassword = confirmPassword.trim();

    // Name validation
    const nameRegex = /^[A-Za-z\s]+$/;
    if (
      !trimmedName ||
      !nameRegex.test(trimmedName) ||
      trimmedName.length > 15
    ) {
      toast.error(
        "Name must contain only alphabets, max 15 characters, and no extra spaces."
      );
      return;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      toast.error("Enter a valid Gmail address (e.g., example@gmail.com).");
      return;
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!trimmedPassword || !passwordRegex.test(trimmedPassword)) {
      toast.error(
        "Password must be at least 6 characters, include uppercase, lowercase, a number, and a special character."
      );
      return;
    }

    // Confirm Password validation
    if (trimmedPassword !== trimmedConfirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    // Phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!trimmedPhone || !phoneRegex.test(trimmedPhone)) {
      toast.error("Phone number must be exactly 10 digits.");
      return;
    }

    // Gender validation
    if (!gender) {
      toast.error("Please select a gender.");
      return;
    }

    // Date of Birth validation
    if (!dateOfBirth) {
      toast.error("Date of birth is required.");
      return;
    }

    // Age validation (between 12 and 80)
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    if (age < 12 || age > 80) {
      toast.error("You must be between 12 and 80 years old to register.");
      return;
    }

    try {
      const response = await signup(
        email,
        password,
        name,
        phoneNumber,
        gender,
        dateOfBirth
      );

      if (response?.error) {
        toast.error(response.error || "Signup failed. Please try again.");
        return;
      }

      toast.success("Sign-up successful! Redirecting...");
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Error during sign-up.");
    }
  };

  return (
    <div className="flex flex-col justify-between md:flex-row bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 text-white">
      {/* Left Side - UI Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: 'url("./wave2.svg")',
          backgroundSize: "cover",
        }}
        className="flex flex-col items-center justify-center w-full text-center p-10 font-poppins"
      >
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-4 z-10">
          Welcome to CinCircle
        </motion.h1>

        <motion.p className="text-lg text-gray-300 max-w-md z-10">
          Join the ultimate movie community! Sign up and explore the world of
          cinema.
        </motion.p>
      </motion.div>

      {/* Right Side - Signup Form */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center w-full md:w-1/2 lg:w-3/7 p-10 md:p-10 bg-black rounded-t-md mt-16 ml-0"
      >
        <h2 className="text-3xl font-semibold text-purple-400 mb-6 text-center font-quicksand">
          Create Account
        </h2>

        <form onSubmit={handleSignUp} className="w-full max-w-sm space-y-4">
          <Input
            icon={User}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            icon={Lock}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Input
            icon={Phone}
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Input
            icon={Calendar}
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
          <Select
            icon={SquareUserRound}
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          />

          {/* Password Strength Meter */}
          <div className="w-full">
            <PasswordStrengthMeter password={password} />
          </div>

          <motion.button
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
          >
            {isLoading ? (
              <Loader className="animate-spin mx-auto" size={24} />
            ) : (
              "Sign Up"
            )}
          </motion.button>
        </form>

        <p className="mt-4 text-gray-400 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;
