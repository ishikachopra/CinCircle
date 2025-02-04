import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaUserCircle, FaBell, FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Button = ({ variant, children, className, ...props }) => {
    const baseStyle =
        "px-4 py-2 rounded-lg text-lg font-semibold transition duration-300";

    const variantStyles = {
        default: "bg-purple-500 text-white hover:bg-purple-600",
        ghost: "text-white border border-white hover:bg-white hover:text-black",
    };

    return (
        <button
            className={`${baseStyle} ${variantStyles[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

const movies = [
    {
        title: "Avengers: Endgame",
        image: "/images/raya.jpg",
        description: "The ultimate superhero showdown - 97% Match",
    },
    {
        title: "John Wick",
        image: "/images/johnwick.jpg",
        description: "An action-packed thriller - 95% Match",
    },
    {
        title: "Avengers: Endgame",
        image: "/images/raya.jpg",
        description: "The ultimate superhero showdown - 97% Match",
    },
    {
        title: "The Dark Knight",
        image: "/images/johnwick.jpg",
        description: "An intense crime drama - 96% Match",
    },
    {
        title: "Avengers: Endgame",
        image: "/images/raya.jpg",
        description: "The ultimate superhero showdown - 97% Match",
    },
    {
        title: "The Dark Knight",
        image: "/images/johnwick.jpg",
        description: "An intense crime drama - 96% Match",
    },
    {
        title: "Avengers: Endgame",
        image: "/images/raya.jpg",
        description: "The ultimate superhero showdown - 97% Match",
    },
    {
        title: "The Dark Knight",
        image: "/images/johnwick.jpg",
        description: "An intense crime drama - 96% Match",
    },
    {
        title: "Avengers: Endgame",
        image: "/images/raya.jpg",
        description: "The ultimate superhero showdown - 97% Match",
    }
];

export default function CineCircleLandingPage() {
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    const [startIndex, setStartIndex] = useState(0);

    const moviesPerPage = {
        sm: 3,
        md: 4,
        lg: 6,
    };

    const getMoviesToShow = () => {
        const screenSize = window.innerWidth;
        const perPage = screenSize >= 1024 ? moviesPerPage.lg : screenSize >= 768 ? moviesPerPage.md : moviesPerPage.sm;
        return movies.slice(startIndex, startIndex + perPage);
    };

    const nextSlide = () => {
        if (startIndex + moviesPerPage.lg < movies.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const prevSlide = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <div className="bg-black text-white min-h-screen relative">
            {/* Navbar
            <header className="flex flex-wrap items-center justify-between px-6 py-4 sticky top-0 bg-gray-950">
                <h1 className="text-xl md:text-2xl font-bold">CinCircle</h1>
                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="text-base  hover:text-purple-500 transition duration-300">
                        DASHBOARD
                    </a>
                    <a href="#" className="text-base  hover:text-purple-500 transition duration-300">
                        MOVIES
                    </a>
                    <a href="#" className="text-base hover:text-purple-500 transition duration-300">
                        JOIN
                    </a>
                    <a href="#" className="text-base  hover:text-purple-500 transition duration-300">
                        UPLOAD
                    </a>
                </nav>
                <div className="flex items-center space-x-6">
                    Notification Icon
                    <div className="relative">
                        <FaBell className="text-2xl hover:text-purple-500 cursor-pointer transition-all duration-300" />
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                            3
                        </span>
                    </div>

                    Profile Icon
                    <div className="relative">
                        <FaUserCircle className="text-3xl hover:text-purple-500 cursor-pointer transition-all duration-300" />
                    </div>
                </div>
            </header> */}




            {/* Hero Section */}
            <div className="relative w-full">
                <motion.div
                    className="relative w-full h-[90vh] bg-cover bg-center bg-fixed flex flex-col justify-center  "
                    style={{
                        backgroundImage: `url('${movies[currentMovieIndex].image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        boxShadow: "inset 0 0 40px rgba(0, 0, 0, 0.6)",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Movie Details */}
                    <div className="bg-black bg-opacity-60 w-auto h-full px-3 md:px-16 lg:px-20">
                        <motion.div
                            className="w-full md:w-1/2 mt-10  text-left lg:mt-48 lg:mb-24 md:mt-36 mb-16"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                                {movies[currentMovieIndex].title}
                            </h2>
                            <p className="text-lg md:text-xl lg:text-2xl mb-6">
                                {movies[currentMovieIndex].description}
                            </p>
                            <div className="flex space-x-4">
                                <Button variant="default" className="text-sm md:text-xl lg:text-lg px-6 md:px-8 py-2">
                                    Create Room
                                </Button>
                                <Button variant="ghost" className="text-sm md:text-xl lg:text-lg px-6 md:px-8 py-2">
                                    + Add to My List
                                </Button>
                            </div>
                        </motion.div>

                        {/* Slider*/}
                        <motion.div
                            className="relative  left-1/2 transform -translate-x-1/2 w-full  "
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex md:space-x-8 justify-center items-center mt-14 ">
                                <button onClick={prevSlide} className=" z-10 p-2 bg-black bg-opacity-80 rounded-full m-auto mr-2 h-full ">
                                    <FaChevronLeft className="size-1.5 lg:size-7" />
                                </button>
                                <div className="flex space-x-8 ">
                                    <motion.div
                                        className="flex gap-3 lg:gap-8 justify-center transition-transform"
                                        style={{
                                            transform: `translateX(-${startIndex * 300}px)`,
                                            transition: "transform 0.3s cubic-bezier(0.85, 0.85, 0.95, 1)", // Smooth transition
                                        }}
                                    >
                                        {getMoviesToShow().map((movie, index) => (
                                            <motion.div
                                                key={index}
                                                className={`cursor-pointer transition-transform 
                                                    ${currentMovieIndex === index ? "border-2 border-purple-500 rounded-lg" : ""} `}
                                                whileHover={{ scale: 1.15 }}  // Increase scale on hover (adjust this value as needed)
                                                onMouseEnter={() => setCurrentMovieIndex(index)}
                                                animate={{
                                                    scale: currentMovieIndex === index ? 1.15 : 1, // Keep the selected movie larger
                                                }}
                                            >
                                                <img src={movie.image} alt={movie.title} className="w-full h-full rounded-lg shadow-lg" />
                                            </motion.div>
                                        ))}
                                    </motion.div>



                                </div>
                                <button onClick={nextSlide} className="z-10 p-2 bg-black bg-opacity-80 rounded-full m-auto ml-2 h-full ">
                                    <FaChevronRight className="size-1.5 lg:size-7" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            
            {/* <footer className="bg-gray-950 text-white py-12">
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
            </footer> */}

        </div>
    );
}
