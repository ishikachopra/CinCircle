import nodemailer from "nodemailer";
import {
    PASSWORD_RESET_REQUEST_TEMPLATE,
    PASSWORD_RESET_SUCCESS_TEMPLATE,
    VERIFICATION_EMAIL_TEMPLATE,
    WELCOME_EMAIL_TEMPLATE,
} from "./emailTemplate.js";
import dotenv from "dotenv";

dotenv.config();
const sender = process.env.EMAIL_USER;

const mailTransporter = nodemailer.createTransport({
    service: "gmail", // Using Gmail as the SMTP service
    auth: {
        user: process.env.EMAIL_USER, // Gmail credentials
        pass: process.env.EMAIL_PASS, // Gmail password (or app-specific password if 2FA is enabled)
    },
});

export const sendVerificationEmail = async (email, verificationToken) => {
    try {
        const htmlContent = VERIFICATION_EMAIL_TEMPLATE.replace(
            "{verificationCode}",
            verificationToken
        );

        const response = await mailTransporter.sendMail({
            from: sender, // Sender address
            to: email, // Recipient email
            subject: "Verify your email", // Email subject
            html: htmlContent, // HTML content
        });

        console.log("Verification email sent successfully", response);
    } catch (error) {
        console.error("Error sending verification email", error);
        throw new Error(`Error sending verification email: ${error}`);
    }
};

export const sendWelcomeEmail = async (email, name) => {
    try {
        const htmlContent = WELCOME_EMAIL_TEMPLATE(name);

        const response = await mailTransporter.sendMail({
            from: sender, // Sender address
            to: email, // Recipient email
            subject: "Welcome to Ou@r Platform", // Email subject
            html: htmlContent, // HTML content
        });

        console.log("Welcome email sent successfully", response);
    } catch (error) {
        console.error("Error sending welcome email", error);
        throw new Error(`Error sending welcome email: ${error}`);
    }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
    try {
        const htmlContent = PASSWORD_RESET_REQUEST_TEMPLATE.replace(
            "{resetURL}",
            resetURL
        );

        const response = await mailTransporter.sendMail({
            from: sender, // Sender address
            to: email, // Recipient email
            subject: "Reset your password", // Email subject
            html: htmlContent, // HTML content
        });

        console.log("Password reset email sent successfully", response);
    } catch (error) {
        console.error("Error sending password reset email", error);
        throw new Error(`Error sending password reset email: ${error}`);
    }
};

export const sendResetSuccessEmail = async (email) => {
    try {
        const htmlContent = PASSWORD_RESET_SUCCESS_TEMPLATE;

        const response = await mailTransporter.sendMail({
            from: sender, // Sender address
            to: email, // Recipient email
            subject: "Password reset successfully", // Email subject
            html: htmlContent, // HTML content
        });

        console.log("Password reset success email sent successfully", response);
    } catch (error) {
        console.error("Error sending password reset success email", error);
        throw new Error(`Error sending password reset success email: ${error}`);
    }
};
