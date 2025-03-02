import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  genre: { type: String, required: true },
  duration: { type: Number, required: true },
  thumbnail: { type: String, required: true },
  trailerUrl: { type: String, required: true },
  movieUrl: { type: String, required: true }
}, { timestamps: true });  // ✅ Adds createdAt and updatedAt

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;

