// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Button = ({ variant, children, className, ...props }) => {
//     const baseStyle =
//         "px-6 py-2 rounded-lg text-lg font-semibold transition duration-300";

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

// const movies = [
//     {
//         title: "Raya and the Last Dragon",
//         image: "/images/raya.jpg",
//         description: "A Disney Original Film - 98% Match - March 2021",
//     },
//     {
//         title: "John Wick",
//         image: "/images/johnwick.jpg",
//         description: "An action-packed thriller - 95% Match",
//     },
//     {
//         title: "Baby Driver",
//         image: "/images/babydriver.jpeg",
//         description: "A stylish heist movie - 92% Match",
//     },
//     {
//         title: "Avengers: Endgame",
//         image: "/images/raya.jpg",
//         description: "The ultimate superhero showdown - 97% Match",
//     },
//     {
//         title: "The Dark Knight",
//         image: "/images/johnwick.jpg",
//         description: "An intense crime drama - 96% Match",
//     },
//     {
//         title: "Raya and the Last Dragon",
//         image: "/images/raya.jpg",
//         description: "A Disney Original Film - 98% Match - March 2021",
//     },
//     {
//         title: "John Wick",
//         image: "/images/johnwick.jpg",
//         description: "An action-packed thriller - 95% Match",
//     },
//     {
//         title: "Baby Driver",
//         image: "/images/babydriver.jpeg",
//         description: "A stylish heist movie - 92% Match",
//     },
//     {
//         title: "Raya and the Last Dragon",
//         image: "/images/raya.jpg",
//         description: "A Disney Original Film - 98% Match - March 2021",
//     },
//     {
//         title: "John Wick",
//         image: "/images/johnwick.jpg",
//         description: "An action-packed thriller - 95% Match",
//     },
//     {
//         title: "Baby Driver",
//         image: "/images/babydriver.jpeg",
//         description: "A stylish heist movie - 92% Match",
//     },
//     {
//         title: "Raya and the Last Dragon",
//         image: "/images/raya.jpg",
//         description: "A Disney Original Film - 98% Match - March 2021",
//     },
//     {
//         title: "John Wick",
//         image: "/images/johnwick.jpg",
//         description: "An action-packed thriller - 95% Match",
//     },
//     {
//         title: "Baby Driver",
//         image: "/images/babydriver.jpeg",
//         description: "A stylish heist movie - 92% Match",
//     },
// ];

// export default function CineCircleLandingPage() {
//     const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

//     const handleMovieHover = (index) => {
//         setCurrentMovieIndex(index);
//     };

//     return (
//         <div className="bg-black text-white min-h-screen relative">
//             {/* Header */}
//             <header className="flex items-center justify-between px-6 py-4 sticky top-0 bg-black bg-opacity-80 backdrop-blur-md z-50">
//                 <h1 className="text-2xl font-bold">CinCircle</h1>
//                 <nav className="flex space-x-6">
//                     <a href="#" className="hover:text-purple-500 transition duration-300">
//                         Dashboard
//                     </a>
//                     <a href="#" className="hover:text-purple-500 transition duration-300">
//                         Movies
//                     </a>
//                     <a href="#" className="hover:text-purple-500 transition duration-300">
//                         Series
//                     </a>
//                     <a href="#" className="hover:text-purple-500 transition duration-300">
//                         Kids
//                     </a>
//                 </nav>
//                 <div className="flex items-center space-x-4">
//                     <motion.div whileHover={{ scale: 1.1 }}>
//                         <Button variant="ghost">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-6 w-6"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-9.33-5.197"
//                                 />
//                             </svg>
//                         </Button>
//                     </motion.div>
//                     <img
//                         src="https://via.placeholder.com/40"
//                         alt="Profile"
//                         className="w-10 h-10 rounded-full"
//                     />
//                 </div>
//             </header>

//             {/* Hero Section with Background Image */}
//             <div className="relative h-screen">
//                 <motion.div
//                     className="absolute inset-0 bg-cover bg-center flex items-center justify-start p-16 transition-all duration-500"
//                     style={{
//                         backgroundImage: `url('${movies[currentMovieIndex].image}')`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                         boxShadow: "inset 0 0 40px rgba(0, 0, 0, 0.9)", // Dark fading border effect
//                     }}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     {/* Text on the Left Side */}
//                     <motion.div
//                         className="w-1/2 text-left"
//                         initial={{ x: -50, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <h2 className="text-6xl font-extrabold mb-4">
//                             {movies[currentMovieIndex].title}
//                         </h2>
//                         <p className="text-2xl mb-6">{movies[currentMovieIndex].description}</p>
//                         <div className="flex space-x-6">
//                             <Button variant="default" className="text-xl px-8 py-3">
//                                 Play
//                             </Button>
//                             <Button variant="ghost" className="text-xl px-8 py-3">
//                                 + Add to My List
//                             </Button>
//                         </div>
//                     </motion.div>
//                 </motion.div>

//                 {/* Movie Thumbnails at Bottom (Bigger & More Margin Bottom) */}
//                 <motion.div
//                     className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <div className="flex space-x-8">
//                         {movies.map((movie, index) => (
//                             <motion.div
//                                 key={index}
//                                 className={`cursor-pointer transition-transform duration-300 ${index === currentMovieIndex ? "scale-150 border-4 border-purple-500" : "opacity-60"
//                                     }`}
//                                 onMouseEnter={() => handleMovieHover(index)}
//                                 whileHover={{ scale: 1.3 }}
//                             >
//                                 <img
//                                     src={movie.image}
//                                     alt={movie.title}
//                                     className="h-40 w-32 rounded-xl shadow-2xl"
//                                 />
//                             </motion.div>
//                         ))}
//                     </div>
//                 </motion.div>
//             </div>

//             {/* Scroll to Top Button */}
//             <motion.div
//                 className="fixed bottom-6 right-6"
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//             >
//                 <Button
//                     variant="default"
//                     className="bg-purple-500 px-4 py-2 rounded-full shadow-lg hover:bg-purple-600 transition duration-300"
//                     onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//                 >
//                     Scroll to Top
//                 </Button>
//             </motion.div>
//         </div>
//     );
// }





import React, { useState } from "react";
import { motion } from "framer-motion";

const Button = ({ variant, children, className, ...props }) => {
    const baseStyle =
        "px-6 py-2 rounded-lg text-lg font-semibold transition duration-300";

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
        title: "Raya and the Last Dragon",
        image: "/images/raya.jpg",
        description: "A Disney Original Film - 98% Match - March 2021",
    },
    {
        title: "John Wick",
        image: "/images/johnwick.jpg",
        description: "An action-packed thriller - 95% Match",
    },
    {
        title: "Baby Driver",
        image: "/images/babydriver.jpeg",
        description: "A stylish heist movie - 92% Match",
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
    }
];

export default function CineCircleLandingPage() {
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

    const handleMovieHover = (index) => {
        setCurrentMovieIndex(index);
    };

    return (
        <div className="bg-black text-white min-h-screen relative">
            {/* Navbar */}
            <header className="flex items-center justify-between px-6 py-4 sticky top-0 bg-black bg-opacity-80 backdrop-blur-md z-50">
                <h1 className="text-2xl font-bold">Cine Circle</h1>
                <nav className="flex space-x-6">
                    <a href="#" className="hover:text-purple-500 transition duration-300">Dashboard</a>
                    <a href="#" className="hover:text-purple-500 transition duration-300">Movies</a>
                    <a href="#" className="hover:text-purple-500 transition duration-300">Series</a>
                    <a href="#" className="hover:text-purple-500 transition duration-300">Kids</a>
                </nav>
                <div className="flex items-center space-x-4">
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <Button variant="ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-9.33-5.197" />
                            </svg>
                        </Button>
                    </motion.div>
                    <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
                </div>
            </header>

            {/* Hero Section with Background Image */}
            <div className="relative h-[90vh]">
                <motion.div
                    className="absolute inset-0 bg-cover bg-center flex items-center justify-start p-16 transition-all duration-500"
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
                    {/* Text on the Left Side */}
                    <motion.div
                        className="w-1/2 text-left"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-6xl font-extrabold mb-4">
                            {movies[currentMovieIndex].title}
                        </h2>
                        <p className="text-2xl mb-6">{movies[currentMovieIndex].description}</p>
                        <div className="flex space-x-6">
                            <Button variant="default" className="text-xl px-8 py-3">
                                Play
                            </Button>
                            <Button variant="ghost" className="text-xl px-8 py-3">
                                + Add to My List
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Movie Thumbnails at Bottom (Wider & No Zoom on Hover) */}
                <motion.div
                    className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-full px-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex space-x-8 justify-center overflow-x-auto">
                        {movies.map((movie, index) => (
                            <motion.div
                                key={index}
                                className={`cursor-pointer transition-transform duration-300 ${
                                    index === currentMovieIndex ? "border-4 border-purple-500" : "opacity-60"
                                }`}
                                onMouseEnter={() => handleMovieHover(index)}
                                whileHover={{ scale: 1.1 }}
                                style={{ padding: "8px", width: "200px", height: "270px" }}  // Adjust container size for hover effect
                            >
                                <div className="w-full h-full flex justify-center items-center bg-transparent transition-transform duration-300">
                                    <img
                                        src={movie.image}
                                        alt={movie.title}
                                        className="w-full h-full rounded-xl shadow-2xl transition-transform duration-300"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
