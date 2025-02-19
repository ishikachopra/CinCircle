import React, { useState, useEffect } from 'react';
import { motion} from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
     Film, Lock, Globe, Copy,
    X, MapIcon as WhatsappIcon, Mail, Twitter
} from 'lucide-react';

function CreateRoom({ onClose }) {
    const [roomName, setRoomName] = useState(`CinCircle-${Math.random().toString(36).substr(2, 6)}`);
    const [isPrivate, setIsPrivate] = useState(false);
    const [password, setPassword] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(`https://cincircle.com/room/${roomName}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const shareViaWhatsApp = () => {
        const url = `https://wa.me/?text=Join%20my%20CinCircle%20watch%20party!%20${encodeURIComponent(`https://cincircle.com/room/${roomName}`)}`;
        window.open(url, '_blank');
    };

    const shareViaEmail = () => {
        const url = `mailto:?subject=Join%20my%20CinCircle%20watch%20party!&body=Join%20me%20at%20${encodeURIComponent(`https://cincircle.com/room/${roomName}`)}`;
        window.open(url);
    };

    const shareViaTwitter = () => {
        const url = `https://twitter.com/intent/tweet?text=Join%20my%20CinCircle%20watch%20party!%20${encodeURIComponent(`https://cincircle.com/room/${roomName}`)}`;
        window.open(url, '_blank');
    };

   

    return (
       
            
           
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
                                        <Film className="text-primary" />
                                        Create Watch Party
                                    </h2>
                                    <button
                                    onClick={onClose }
                                        className="text-text-secondary hover:text-text transition-colors"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>
                            </div>

                            {/* Modal Body */}
                            <div className="p-6 space-y-6">
                                {/* Room Name */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">Room Name</label>
                                    <input
                                        type="text"
                                        value={roomName}
                                        onChange={(e) => setRoomName(e.target.value)}
                                        className="w-full bg-surface-light border border-primary/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    />
                                </div>

                                {/* Privacy Settings */}
                                <div>
                                    <label className="block text-sm font-medium mb-4">Privacy Settings</label>
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => setIsPrivate(false)}
                                            className={`flex-1 p-3 rounded-lg border ${!isPrivate ? 'border-primary bg-primary/10' : 'border-surface-light'} transition-all duration-300`}
                                        >
                                            <Globe className="mx-auto mb-2 text-primary" />
                                            <span className="text-sm">Public</span>
                                        </button>
                                        <button
                                            onClick={() => setIsPrivate(true)}
                                            className={`flex-1 p-3 rounded-lg border ${isPrivate ? 'border-primary bg-primary/10' : 'border-surface-light'} transition-all duration-300`}
                                        >
                                            <Lock className="mx-auto mb-2 text-primary" />
                                            <span className="text-sm">Private</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Password Input (if private) */}
                                {isPrivate && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                    >
                                        <label className="block text-sm font-medium mb-2">Room Password</label>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full bg-surface-light border border-primary/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                            placeholder="Enter room password"
                                        />
                                    </motion.div>
                                )}

                                {/* Invite Link */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">Invite Link</label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={`https://cincircle.com/room/${roomName}`}
                                            readOnly
                                            className="flex-1 bg-surface-light border border-primary/30 rounded-lg p-3 focus:outline-none text-text-secondary"
                                        />
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={handleCopyLink}
                                            className="bg-primary/20 p-3 rounded-lg hover:bg-primary/30 transition-colors"
                                        >
                                            <Copy size={20} className={copied ? 'text-green-400' : 'text-primary'} />
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Share Options */}
                                <div>
                                    <label className="block text-sm font-medium mb-3">Share via</label>
                                    <div className="flex gap-3">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={shareViaWhatsApp}
                                            className="flex-1 bg-[#25D366]/20 hover:bg-[#25D366]/30 p-3 rounded-lg transition-colors"
                                        >
                                            <WhatsappIcon className="mx-auto mb-1" size={20} />
                                            <span className="text-xs">WhatsApp</span>
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={shareViaEmail}
                                            className="flex-1 bg-primary/20 hover:bg-primary/30 p-3 rounded-lg transition-colors"
                                        >
                                            <Mail className="mx-auto mb-1" size={20} />
                                            <span className="text-xs">Email</span>
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={shareViaTwitter}
                                            className="flex-1 bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/30 p-3 rounded-lg transition-colors"
                                        >
                                            <Twitter className="mx-auto mb-1" size={20} />
                                            <span className="text-xs">Twitter</span>
                                        </motion.button>
                                    </div>
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
                                        className="flex-1 bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-3 rounded-lg font-semibold shadow-lg hover:shadow-primary/20 transition-all duration-300"
                                    >
                                        Start Room
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </div>


    );
}

export default CreateRoom;