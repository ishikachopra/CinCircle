import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-950 text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        <div>
                            <h3 className="text-3xl font-semibold text-purple-500 mb-4">Movie Night</h3>
                            <p className="text-gray-400">Enjoy your favorite movies with friends, anytime and anywhere. Create rooms, invite friends, and watch together in sync.</p>
                        </div>

                        
                        <div>
                            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#home" className="hover:text-purple-500">Home</a></li>
                                <li><a href="#features" className="hover:text-purple-500">Features</a></li>
                                <li><a href="#how-it-works" className="hover:text-purple-500">How It Works</a></li>
                                <li><a href="#contact" className="hover:text-purple-500">Contact</a></li>
                            </ul>
                        </div>

                        
                        <div>
                            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="https://facebook.com" className="hover:text-purple-500">
                                    <FaFacebook size={24} />
                                </a>
                                <a href="https://twitter.com" className="hover:text-purple-500">
                                    <FaTwitter size={24} />
                                </a>
                                <a href="https://instagram.com" className="hover:text-purple-500">
                                    <FaInstagram size={24} />
                                </a>
                                <a href="https://github.com" className="hover:text-purple-500">
                                    <FaGithub size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    Footer Bottom
                    <div className="mt-12 text-center text-gray-400">
                        <p>&copy; 2025 Movie Night. All rights reserved.</p>
                    </div>

                </div>
            </footer> 
);

export default Footer;
