// import {S3Client,GetObjectCommand} from '@aws-sdk/client-s3';
// import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

// const s3Client = new S3Client({
//     region:"",
//     credentials:{
//          accessKeyId:"",
//          secretKeyId:"",
//     },
// });

// async function getMovie(key){
//     const command = new  GetObjectCommand({
//         Bucket:"",
//         Key:"",
//     })
//     const url =await getSignedUrl(s3Client,command);
//     return url;
// }


import Movie from "../models/movies.model.js";
import { uploadToS3 } from "../services/uploadMovies.js";
import { getSignedUrl } from "../config/s3.config.js";


// ✅ Admin-Only: Upload Movie & Thumbnail
export const uploadMovie = async (req, res) => {
    try {
        const { title, description, genre, duration, trailerUrl } = req.body;

        // ✅ Check if trailer URL is a YouTube link
        if (!trailerUrl.includes("youtube.com") && !trailerUrl.includes("youtu.be")) {
            return res.status(400).json({ message: "Trailer must be a YouTube link." });
        }

        // ✅ Ensure files are provided
        if (!req.files || !req.files.thumbnail || !req.files.movie) {
            return res.status(400).json({ message: "Thumbnail and movie files are required." });
        }

        // ✅ Upload Thumbnail & Movie to S3
        const thumbnailUrl = await uploadToS3(req.files.thumbnail[0], "thumbnails");
        const movieUrl = await uploadToS3(req.files.movie[0], "movies");

        // ✅ Save Movie in MongoDB
        const newMovie = new Movie({
            title,
            description,
            genre,
            duration,
            thumbnail: thumbnailUrl,
            trailerUrl,
            movieUrl
        });

        await newMovie.save();

        return res.status(201).json({ message: "Movie uploaded successfully!", movie: newMovie });

    } catch (error) {
        return res.status(500).json({ message: "Error uploading movie", error: error.message });
    }
};

export const watchMovie = async (req, res) => {
    try {
        const { movieId } = req.params;

        // ✅ Find movie by ID
        const movie = await Movie.findById(movieId);
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }

        // ✅ Extract S3 file key from movie URL
        const movieKey = movie.movieUrl.split(".com/")[1]; // Example: "movies/movie-file.mp4"

        // ✅ Generate Signed URL
        const signedUrl = getSignedUrl(movieKey);

        // ✅ Return movie details with signed URL
        return res.json({
            title: movie.title,
            description: movie.description,
            genre: movie.genre,
            duration: movie.duration,
            thumbnail: movie.thumbnail,
            trailerUrl: movie.trailerUrl,
            movieUrl: signedUrl, // 🎬 Secure streaming link
        });

    } catch (error) {
        return res.status(500).json({ message: "Error fetching movie", error: error.message });
    }
};
