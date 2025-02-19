import React, { useState, useEffect } from 'react';
import { motion} from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    X, MapIcon as  LogIn
} from 'lucide-react';

function JoinRoom({ onClose }) {
    const [joinRoomId, setJoinRoomId] = useState('');
    const [joinPassword, setJoinPassword] = useState('');

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const handleJoinRoom = () => {
        // Handle join room logic here
        console.log('Joining room:', joinRoomId, 'with password:', joinPassword);
    };

    return (
        <div className="min-h-screen bg-background text-text">
            


                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                    onClick={onClose}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-surface border border-primary/20 rounded-xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
                        >
                            {/* Modal Header */}
                            <div className="bg-gradient-to-r from-primary/10 to-primary-dark/10 p-6">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-2xl font-bold flex items-center gap-2">
                                        <LogIn className="text-primary" />
                                        Join Watch Party
                                    </h2>
                                    <button
                                onClick={onClose}
                                        className="text-text-secondary hover:text-text transition-colors"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>
                            </div>

                            {/* Modal Body */}
                            <div className="p-6 space-y-6">
                                {/* Room ID */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">Room ID or Link</label>
                                    <input
                                        type="text"
                                        value={joinRoomId}
                                        onChange={(e) => setJoinRoomId(e.target.value)}
                                        placeholder="Enter room ID or paste invite link"
                                        className="w-full bg-surface-light border border-primary/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    />
                                </div>

                                {/* Password (Optional) */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">Password (if required)</label>
                                    <input
                                        type="password"
                                        value={joinPassword}
                                        onChange={(e) => setJoinPassword(e.target.value)}
                                        placeholder="Enter room password"
                                        className="w-full bg-surface-light border border-primary/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    />
                                </div>

                                <div className="text-sm text-text-secondary">
                                    <p>Need an invite link? Ask your friend to share it with you!</p>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="border-t border-surface-light p-6">
                                <div className="flex gap-4">
                                    <button
                                onClick={onClose}
                                        className="flex-1 px-4 py-3 rounded-lg border border-surface-light hover:bg-surface-light transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleJoinRoom}
                                        className="flex-1 bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-3 rounded-lg font-semibold shadow-lg hover:shadow-primary/20 transition-all duration-300"
                                    >
                                        Join Room
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
        </div>
    );
}

export default JoinRoom;