// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { movies } from '../constants';

// const Button = ({ variant, children, className, ...props }) => {
//     const baseStyle =
//         "px-4 py-2 rounded-lg text-lg font-semibold transition duration-300";

//     const variantStyles = {
//         default: "bg-purple-500 text-white hover:bg-purple-600",
//         ghost: "text-white border border-white hover:bg-white hover:text-black",
//     };

//     return (
//         <button
//             className={`${baseStyle} ${variantStyles[variant]} ${className}`}
//             {...props}
//         >
//             {children}
//         </button>
//     );
// };


// export default function CineCircleLandingPage() {
//     const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
//     const [startIndex, setStartIndex] = useState(0);

//     const moviesPerPage = {
//         sm: 3,
//         md: 4,
//         lg: 6,
//     };

//     const getMoviesToShow = () => {
//         const screenSize = window.innerWidth;
//         const perPage = screenSize >= 1024 ? moviesPerPage.lg : screenSize >= 768 ? moviesPerPage.md : moviesPerPage.sm;
//         return movies.slice(startIndex, startIndex + perPage);
//     };

//     const nextSlide = () => {
//         if (startIndex + moviesPerPage.lg < movies.length) {
//             setStartIndex(startIndex + 1);
//         }
//     };

//     const prevSlide = () => {
//         if (startIndex > 0) {
//             setStartIndex(startIndex - 1);
//         }
//     };

//     return (
//         <div className="bg-black text-white min-h-screen relative">
            

//             {/* Hero Section */}
//             <div className="relative w-full">
//                 <motion.div
//                     className="relative w-full h-[90vh] bg-cover bg-center bg-fixed flex flex-col justify-center  "
//                     style={{
//                         backgroundImage: `url('${movies[currentMovieIndex].image}')`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                         boxShadow: "inset 0 0 40px rgba(0, 0, 0, 0.6)",
//                     }}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     {/* Movie Details */}
//                     <div className="bg-black bg-opacity-60 w-auto h-full px-3 md:px-16 lg:px-20">
//                         <motion.div
//                             className="w-full md:w-1/2 mt-10  text-left lg:mt-48 lg:mb-24 md:mt-36 mb-16"
//                             initial={{ x: -50, opacity: 0 }}
//                             animate={{ x: 0, opacity: 1 }}
//                             transition={{ duration: 0.6 }}
//                         >
//                             <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4">
//                                 {movies[currentMovieIndex].title}
//                             </h2>
//                             <p className="text-lg md:text-xl lg:text-2xl mb-6">
//                                 {movies[currentMovieIndex].description}
//                             </p>
//                             <div className="flex space-x-4">
//                                 <Button variant="default" className="text-sm md:text-xl lg:text-lg px-6 md:px-8 py-2">
//                                     Create Room
//                                 </Button>
//                                 <Button variant="ghost" className="text-sm md:text-xl lg:text-lg px-6 md:px-8 py-2">
//                                     + Add to My List
//                                 </Button>
//                             </div>
//                         </motion.div>

//                         {/* Slider*/}
//                         <motion.div
//                             className="relative  left-1/2 transform -translate-x-1/2 w-full  "
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ duration: 0.6 }}
//                         >
//                             <div className="flex md:space-x-8 justify-center items-center mt-14 ">
//                                 <button onClick={prevSlide} className=" z-10 p-2 bg-black bg-opacity-80 rounded-full m-auto mr-2 h-full ">
//                                     <FaChevronLeft className="size-1.5 lg:size-7" />
//                                 </button>
//                                 <div className="flex space-x-8 ">
//                                     <motion.div
//                                         className="flex gap-3 lg:gap-8 justify-center transition-transform"
//                                         style={{
//                                             transform: `translateX(-${startIndex * 300}px)`,
//                                             transition: "transform 0.3s cubic-bezier(0.85, 0.85, 0.95, 1)", // Smooth transition
//                                         }}
//                                     >
//                                         {getMoviesToShow().map((movie, index) => (
//                                             <motion.div
//                                                 key={index}
//                                                 className={`cursor-pointer transition-transform 
//                                                     ${currentMovieIndex === index ? "border-2 border-purple-500 rounded-lg" : ""} `}
//                                                 whileHover={{ scale: 1.15 }}  // Increase scale on hover (adjust this value as needed)
//                                                 onMouseEnter={() => setCurrentMovieIndex(index)}
//                                                 animate={{
//                                                     scale: currentMovieIndex === index ? 1.15 : 1, // Keep the selected movie larger
//                                                 }}
//                                             >
//                                                 <img src={movie.image} alt={movie.title} className="w-full h-full rounded-lg shadow-lg" />
//                                             </motion.div>
//                                         ))}
//                                     </motion.div>



//                                 </div>
//                                 <button onClick={nextSlide} className="z-10 p-2 bg-black bg-opacity-80 rounded-full m-auto ml-2 h-full ">
//                                     <FaChevronRight className="size-1.5 lg:size-7" />
//                                 </button>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </motion.div>
//             </div>

//         </div>
//     );
// }





import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { movies } from "../constants";

const Button = ({ variant, children, className, ...props }) => {
    const baseStyle =
        "px-4 py-2 rounded-lg text-sm md:text-lg font-semibold transition duration-300";

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
    const [moviesPerPage, setMoviesPerPage] = useState(3);

    useEffect(() => {
        const updateMoviesPerPage = () => {
            if (window.innerWidth >= 1024) setMoviesPerPage(6);
            else if (window.innerWidth >= 768) setMoviesPerPage(4);
            else setMoviesPerPage(3);
        };

        updateMoviesPerPage();
        window.addEventListener("resize", updateMoviesPerPage);
        return () => window.removeEventListener("resize", updateMoviesPerPage);
    }, []);

    const getMoviesToShow = () => {
        let extendedMovies = [...movies, ...movies]; // Duplicate movies for smooth looping
        return extendedMovies.slice(startIndex, startIndex + moviesPerPage);
    };

    const nextSlide = () => {
        if (startIndex + moviesPerPage >= movies.length) {
            setStartIndex(0); // Loop back to the start
        } else {
            setStartIndex(startIndex + 1);
        }
    };

    const prevSlide = () => {
        if (startIndex === 0) {
            setStartIndex(movies.length - moviesPerPage); // Loop back to the end
        } else {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <div className="bg-black text-white min-h-screen flex flex-col justify-between">
            {/* Hero Section */}
            <div className="relative w-full flex-grow">
                <motion.div
                    className="relative w-full h-[80vh] md:h-[85vh] lg:h-[90vh] bg-cover bg-center flex flex-col justify-center"
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
                    <div className="bg-black bg-opacity-60 px-4 sm:px-8 md:px-16 lg:px-20 h-full flex flex-col justify-center">
                        <motion.div
                            className="w-full md:w-3/4 lg:w-1/2 text-left"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                                {movies[currentMovieIndex].title}
                            </h2>
                            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-6">
                                {movies[currentMovieIndex].description}
                            </p>
                            <div className="flex space-x-3 sm:space-x-4">
                                <Button variant="default" className="px-4 sm:px-6 md:px-8 py-2">
                                    Create Room
                                </Button>
                                <Button variant="ghost" className="px-4 sm:px-6 md:px-8 py-2">
                                    + Add to My List
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Slider Section at Bottom */}
            <motion.div
                className="relative mx-auto w-full max-w-6xl mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center justify-center space-x-3 sm:space-x-6">
                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        className="p-2 bg-black bg-opacity-80 rounded-full"
                    >
                        <FaChevronLeft className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
                    </button>

                    {/* Movie Thumbnails */}
                    <div className="flex space-x-4 sm:space-x-6 overflow-hidden">
                        <motion.div
                            className="flex gap-3 lg:gap-8 transition-transform"
                            style={{
                                transform: `translateX(-${startIndex * 200}px)`,
                                transition: "transform 0.3s cubic-bezier(0.85, 0.85, 0.95, 1)",
                            }}
                        >
                            {getMoviesToShow().map((movie, index) => {
                                const actualIndex = (startIndex + index) % movies.length;
                                return (
                                    <motion.div
                                        key={actualIndex}
                                        className={`cursor-pointer transition-transform ${
                                            currentMovieIndex === actualIndex
                                                ? "border-2 border-purple-500 rounded-lg"
                                                : ""
                                        }`}
                                        whileHover={{ scale: 1.1 }}
                                        onMouseEnter={() => setCurrentMovieIndex(actualIndex)}
                                        animate={{
                                            scale: currentMovieIndex === actualIndex ? 1.1 : 1,
                                        }}
                                    >
                                        <img
                                            src={movie.image}
                                            alt={movie.title}
                                            className="w-28 sm:w-36 md:w-48 lg:w-56 rounded-lg shadow-lg"
                                        />
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="p-2 bg-black bg-opacity-80 rounded-full"
                    >
                        <FaChevronRight className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
