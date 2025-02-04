import Hero from "../sections/Hero";
import About from "../sections/About";

// import { useEffect } from "react";

// const GridBackground = () => {
//     useEffect(() => {
//         const gridItems = document.querySelectorAll(".grid-background > div");

//         gridItems.forEach((item) => {
//             const delay = getRandomInt(0, 5);
//             const duration = getRandomInt(3, 6);

//             item.style.animationDelay = `${delay}s`;
//             item.style.animationDuration = `${duration}s`;
//         });
//     }, []); // Run once after component mounts

//     function getRandomInt(min, max) {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }

//     return (
//         <>
       
//             {/* Grid Background */}
//             <div className="grid-background absolute inset-0 p-2 grid grid-cols-12 gap-2 transform -skew-y-12 scale-125">
//                 {[
//                     [2, 5, 1, 4],
//                     [5, 3, 2, 2],
//                     [4, 7, 1],
//                     [2, 4, 6],
//                     [5, 5, 2],
//                     [4, 7, 1],
//                     [4, 7, 1]
//                 ].map((row, rowIndex) => (
//                     <div key={rowIndex} className="flex w-full">
//                         {row.map((colSpan, colIndex) => (
//                             <div key={colIndex} className={`col-span-${colSpan} bg-gray-800 rounded animate-pulse`}></div>
//                         ))}
//                     </div>
//                 ))}
//             </div>

//             {/* Content */}
//             {/* <div className="relative">
//                 <h2 className="text-4xl text-white font-extrabold">
//                     Welcome <span className="text-purple-500">Grid</span> Background
//                 </h2>
//             </div> */}
//             <Hero/>
//         </>
        
//     );
// };

// export default GridBackground;


import { useEffect } from "react";

const GridBackground = () => {
    useEffect(() => {
        const gridItems = document.querySelectorAll(".grid-background > div");

        gridItems.forEach((item) => {
            const delay = getRandomInt(0, 5);
            const duration = getRandomInt(3, 6);

            item.style.animationDelay = `${delay}s`;
            item.style.animationDuration = `${duration}s`;
        });
    }, []); // Run once after component mounts

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <>

            <div class="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 overflow-hidden bg-opacity-0">


                <div class="grid-background absolute inset-0 p-2 grid grid-cols-12 gap-2 transform -skew-y-12 scale-125 ">


                    <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>
                    <div class="col-span-5 bg-gray-800 rounded animate-pulse"></div>
                    <div class="col-span-1 bg-gray-800 rounded animate-pulse"></div>
                    <div class="col-span-4 bg-gray-800 rounded animate-pulse"></div>


                    <div class="col-span-5 bg-gray-800 rounded animate-pulse"></div>
                    <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>
                    <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>
                    <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>


                    <div class="col-span-4 bg-gray-800 rounded animate-pulse"></div>
                    <div class="col-span-7 bg-gray-800 rounded animate-pulse"></div>
                    <div class="col-span-1 bg-gray-800 rounded animate-pulse"></div>


                    <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>
                    <div class="col-span-4 bg-gray-800 rounded animate-pulse"></div>
                    <div class="col-span-6 bg-gray-800 rounded animate-pulse"></div>


                    <div class="col-span-5 bg-gray-800 rounded animate-pulse"></div>
                    <div class="col-span-5 bg-gray-800 rounded animate-pulse"></div>
                    <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>


                    <div class="col-span-4 bg-gray-800 rounded animate-pulse"></div>
                    <div class="col-span-7 bg-gray-800 rounded animate-pulse"></div>
                    <div class="col-span-1 bg-gray-800 rounded animate-pulse"></div>


                    <div class="col-span-4 bg-gray-800 rounded animate-pulse"></div>
                    <div class="col-span-7 bg-gray-800 rounded animate-pulse"></div>
                    <div class="col-span-1 bg-gray-800 rounded animate-pulse"></div>
                </div>


                {/* <div class="relative">
                    <h2 class="text-4xl text-white font-extrabold">Welcome <span class="text-purple-500">Grid</span> Background</h2>
                </div> */}
                <Hero/>
                <About />

            </div>
        </>

    );
};

export default GridBackground;

