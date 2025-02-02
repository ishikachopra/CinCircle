import { useEffect, useState } from "react";

const Section = ({ title, category, type }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Fetch the data here using category and type
        fetchMovies(category, type);
    }, [category, type]);

    const fetchMovies = async (category, type) => {
        const response = await fetch(`/api/movies?category=${category}&type=${type}`);
        const data = await response.json();
        setMovies(data.results);
    };

    return (
        <div className="my-12">
            <h2 className="text-white text-3xl font-bold mb-6">{title}</h2>
            <div className="flex gap-6 overflow-x-scroll">
                {movies.map((movie) => (
                    <div key={movie.id} className="flex-shrink-0 w-48">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-full h-auto" />
                        <p className="text-white mt-2">{movie.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section;
