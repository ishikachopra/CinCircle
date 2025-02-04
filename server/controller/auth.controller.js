import { User } from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import {
    sendVerificationEmail,
    sendWelcomeEmail,
    sendPasswordResetEmail,
    sendResetSuccessEmail,
} from "../email/email.js";
import crypto from "crypto";

export const signup = async (req, res) => {
    const { email, password, name, phoneNumber, gender, dateOfBirth } = req.body;
    try {
        if (
            !email ||
            !password ||
            !name ||
            !phoneNumber ||
            !gender ||
            !dateOfBirth
        ) {
            throw new Error("All fields are required");
        }
        const userAlreadyExists = await User.findOne({ email });
        if (userAlreadyExists) {
            return res
                .status(400)
                .json({ success: false, message: "User already exist" });
        }
        const hashedPassword = await bcryptjs.hash(password, 10);
        const verificationToken = Math.floor(
            100000 + Math.random() * 900000
        ).toString(); // Generate the token

        const user = new User({
            email,
            password: hashedPassword,
            name,
            phoneNumber,
            gender,
            dateOfBirth,
            verificationToken,
            verificationTokenExpireAt: Date.now() + 24 * 60 * 60 * 1000, //24hrs
        });
        await user.save();

        generateTokenAndSetCookie(res, user._id);

        await sendVerificationEmail(user.email, user.verificationToken);
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {
                ...user._doc,
                password: undefined,
            },
        });


    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid credentials" })
        }
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }
        const token = generateTokenAndSetCookie(res, user._id);
        console.log(token);

        user.lastLogin = new Date();
        await user.save();

        res.status(200).json({
            success: true,
            message: "Logged in successfully",
            user: { ...user._doc, password: undefined },

        });

    } catch (error) {
        console.log("Error in login", error);
        res.status(400).json({ success: false, message: error.message });
    }
};

export const logout = async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "Logged out successfully" });
};


export const verifyEmail = async (req, res) => {
    const { code } = req.body;
    try {
        const user = await User.findOne({
            verificationToken: code,
            verificationTokenExpireAt: { $gt: Date.now() },
        });

        if (!user) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Invalid or expired verification code",
                });
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpireAt = undefined;
        await user.save();

        await sendWelcomeEmail(user.email, user.name);

        res.status(200).json({
            success: true,
            message: "Email verified successfully",
            user: {
                ...user._doc,
                password: undefined,
            },
        });
    } catch (error) {
        console.log("error in verifyEmail ", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};


export const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res
                .status(400)
                .json({ success: false, message: "User not found" });
        }

        const resetToken = crypto.randomBytes(20).toString("hex");
        const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000;

        user.resetPasswordToken = resetToken;
        user.resetPasswordExpiresAt = resetTokenExpiresAt;

        await user.save();

        await sendPasswordResetEmail(
            user.email,
            `${process.env.CLIENT_URL}/reset-password/${resetToken}`
        );
        res
            .status(200)
            .json({
                success: true,
                message: "Password reset link sent to your email",
            });
        console.log(process.env.CLIENT_URL);
    } catch (error) {
        console.log("Error in forgotPassword", error);
        res.status(400).json({ success: false, message: error.message });
    }
};


export const resetPassword = async (req, res) => {
    try {
        console.log("Reset password route hit"); // Debugging log
        const { token } = req.params; // Get the token from URL params
        const { password } = req.body; // Get the password from the request body

        // Find the user with the reset token and ensure it is not expired
        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpiresAt: { $gt: Date.now() },
        });

        if (!user) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid or expired reset token" }); // Fixed typo from .josn to .json
        }

        // Hash the new password before saving
        const hashedPassword = await bcryptjs.hash(password, 10);

        // Update user's password and clear reset fields
        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpiresAt = undefined;
        await user.save();

        // Send the success email
        await sendResetSuccessEmail(user.email);

        // Respond with success message
        res
            .status(200)
            .json({ success: true, message: "Password reset successful" });
    } catch (error) {
        console.error("Error during password reset:", error); // Log the error for debugging
        res.status(500).json({ success: false, message: "Internal server error" }); // Send a 500 error if something goes wrong
    }
};


export const checkAuth = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select("-password");
        if (!user) {
            return res
                .status(400)
                .json({ success: false, message: "User not found" });
        }
        res.status(200).json({
            success: true,
            user: {
                ...user._doc,
                password: undefined,
            },
        });
    } catch (error) {
        console.log("Error incheckAuth", error);
        res.status(400).json({ success: false, message: error.message });
    }
};
