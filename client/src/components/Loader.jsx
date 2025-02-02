const Poster = ({ title, posterPath, className = "" }) => (
    <div className={className}>
        <img
            src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
            alt={title}
            className="rounded-lg shadow-lg"
        />
    </div>
);

export default Poster;
