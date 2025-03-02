import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, 
  trailer: { type: String, required: true }, 
  movie: { type: String, required: true }, 
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
