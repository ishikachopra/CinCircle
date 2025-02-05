import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { movies } from '../constants';

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

        </div>
    );
}
