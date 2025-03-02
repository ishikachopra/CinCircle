import { useState } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../../store/authStore";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../components/Input";
import { Lock, ArrowLeft, Loader } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ResetPasswordPage = () => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const { resetPassword, error, isLoading, message } = useAuthStore();

	const { token } = useParams();
	const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!token) {
            toast.error("Invalid reset link. Please request a new one.");
            return;
        }
    
        // Trim password inputs
        const trimmedPassword = password.trim();
        const trimmedConfirmPassword = confirmPassword.trim();
    
        // Password validation: At least 6 chars, one uppercase, one lowercase, one number, one special character
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!trimmedPassword || !passwordRegex.test(trimmedPassword)) {
            toast.error(
                "Password must be at least 6 characters, include uppercase, lowercase, a number, and a special character."
            );
            return;
        }
    
        if (trimmedPassword !== trimmedConfirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
    
        try {
            await resetPassword(token, trimmedPassword);
            toast.success("Password reset successfully, redirecting to login page...");
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (error) {
            console.error(error);
            toast.error(error.message || "Error resetting password. The link may have expired.");
        }
    };
    
    

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900 text-white">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="max-w-md w-full bg-gray-900 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
			>
				<div className="p-8">
					<h2 className="text-3xl font-bold mb-6 text-center  bg-purple-500  text-transparent bg-clip-text">
						Reset Password
					</h2>
					{error && <p className="text-red-500 text-sm mb-4">{error}</p>}
					{message && <p className="text-purple-500 text-sm mb-4">{message}</p>}

					<form onSubmit={handleSubmit}>
						<p className="text-gray-300 mb-6 text-center">
							Enter a new password for your account.
						</p>
						<Input
							icon={Lock}
							type="password"
							placeholder="New Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>

						<Input
							icon={Lock}
							type="password"
							placeholder="Confirm New Password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>

						<motion.button
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className="w-full py-3 px-4 bg-purple-500  text-white font-bold rounded-lg shadow-lg hover:bg-purple-600  focus:ring-offset-gray-900 transition duration-200"
							type="submit"
							disabled={isLoading}
						>
							{isLoading ? <Loader className="size-6 animate-spin mx-auto" /> : "Set New Password"}
						</motion.button>
					</form>
				</div>

				<div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
					<Link to={"/login"} className="text-sm text-purple-400 hover:underline flex items-center">
						<ArrowLeft className="h-4 w-4 mr-2" /> Back to Login
					</Link>
				</div>
			</motion.div>
		</div>
	);
};

export default ResetPasswordPage;
