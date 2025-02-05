// import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

// const Footer = () => (
//   <footer className="bg-gray-950 text-white py-16">
//     <div className="container mx-auto px-6">
      
//       {/* Footer Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
//         {/* About Section */}
//         <div>
//           <h3 className="text-4xl font-extrabold text-purple-500 mb-4">Movie Night</h3>
//           <p className="text-gray-400 leading-relaxed">
//             Enjoy your favorite movies with friends, anytime and anywhere. 
//             Create rooms, invite friends, and watch together in sync.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
//           <ul className="space-y-3">
//             <li>
//               <a href="#home" className="hover:text-purple-400 transition-all duration-300">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#features" className="hover:text-purple-400 transition-all duration-300">
//                 Features
//               </a>
//             </li>
//             <li>
//               <a href="#how-it-works" className="hover:text-purple-400 transition-all duration-300">
//                 How It Works
//               </a>
//             </li>
//             <li>
//               <a href="#contact" className="hover:text-purple-400 transition-all duration-300">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Social Media Section */}
//         <div>
//           <h4 className="text-2xl font-semibold mb-4">Follow Us</h4>
//           <div className="flex justify-center md:justify-start space-x-6">
//             <a href="https://facebook.com" className="text-white hover:text-purple-400 transform hover:scale-110 transition-all duration-300">
//               <FaFacebook size={30} />
//             </a>
//             <a href="https://twitter.com" className="text-white hover:text-purple-400 transform hover:scale-110 transition-all duration-300">
//               <FaTwitter size={30} />
//             </a>
//             <a href="https://instagram.com" className="text-white hover:text-purple-400 transform hover:scale-110 transition-all duration-300">
//               <FaInstagram size={30} />
//             </a>
//             <a href="https://github.com" className="text-white hover:text-purple-400 transform hover:scale-110 transition-all duration-300">
//               <FaGithub size={30} />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
//         <p>&copy; {new Date().getFullYear()} Movie Night. All rights reserved.</p>
//       </div>

//     </div>
//   </footer>
// );

// export default Footer;
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-950 text-white py-10">
    <div className="container mx-auto px-6">
      
      {/* Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-gray-300">
        
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold text-purple-500 mb-3">Movie Night</h3>
          <p className="leading-relaxed">
            Enjoy your favorite movies with friends, anytime and anywhere.  
            Create rooms, invite friends, and watch together in sync.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-white">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#home" className="hover:text-purple-400">Home</a></li>
            <li><a href="#features" className="hover:text-purple-400">Features</a></li>
            <li><a href="#how-it-works" className="hover:text-purple-400">How It Works</a></li>
            <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-white">Support</h4>
          <ul className="space-y-1">
            <li><a href="#faq" className="hover:text-purple-400">FAQ</a></li>
            <li><a href="#terms" className="hover:text-purple-400">Terms of Service</a></li>
            <li><a href="#privacy" className="hover:text-purple-400">Privacy Policy</a></li>
            <li><a href="#help" className="hover:text-purple-400">Help Center</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-white">Contact Us</h4>
          <p className="flex items-center space-x-2">
            <FaEnvelope className="text-purple-400" />
            <span>support@movienight.com</span>
          </p>
          <p className="flex items-center space-x-2 mt-1">
            <FaPhone className="text-purple-400" />
            <span>+1 234 567 890</span>
          </p>
          <div className="flex space-x-4 mt-3">
            <a href="https://facebook.com" className="hover:text-purple-400 transition-transform transform hover:scale-110">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" className="hover:text-purple-400 transition-transform transform hover:scale-110">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" className="hover:text-purple-400 transition-transform transform hover:scale-110">
              <FaInstagram size={20} />
            </a>
            <a href="https://github.com" className="hover:text-purple-400 transition-transform transform hover:scale-110">
              <FaGithub size={20} />
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-400 text-xs">
        <p>&copy; {new Date().getFullYear()} Movie Night. All rights reserved.</p>
      </div>

    </div>
  </footer>
);

export default Footer;
