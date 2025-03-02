import { useState } from "react";
import { motion } from "framer-motion";
import { Loader, Upload } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";

const MovieUploadForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    genre: "",
    duration: "",
    thumbnail: null,
    trailerUrl: "",
    movieUrl: null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("genre", formData.genre);
    data.append("duration", formData.duration);
    data.append("trailerUrl", formData.trailerUrl);
    data.append("thumbnail", formData.thumbnail);
    data.append("movieUrl", formData.movieUrl);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/movies/upload",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("Server Response:", response.data);

      toast.success("Movie uploaded successfully!");
      setFormData({
        title: "",
        description: "",
        genre: "",
        duration: "",
        thumbnail: null,
        trailerUrl: "",
        movieUrl: null,
      });
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error(error.response?.data?.error || "Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg sm:max-w-xl md:max-w-xl  bg-gray-900 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden mt-20"

      >
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center  bg-purple-500  text-transparent bg-clip-text">
            Upload Movie
          </h2>

          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="space-y-4"
          >
            <div>
              <label className="block text-gray-300 mb-2">Movie Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter movie title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Description</label>
              <textarea
                name="description"
                placeholder="Enter movie description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Genre</label>
              <input
                type="text"
                name="genre"
                placeholder="Enter movie genre"
                value={formData.genre}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Duration (minutes)</label>
              <input
                type="number"
                name="duration"
                placeholder="Enter movie duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                required
              />
            </div>

           
            <div>
              <label className="block text-gray-300 mb-2">Trailer (YouTube Link)</label>
              <input
                type="url"
                name="trailerUrl"
                placeholder="Enter YouTube trailer link"
                value={formData.trailerUrl}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                required
              />
            </div>
            <div>
              
              <div className="relative w-full">
                <input
                  type="file"
                  name="thumbnail"
                  accept="image/*"
                  onChange={handleFileChange}
                  id="thumbnail"
                  className="absolute w-full h-full opacity-0 cursor-pointer"
                  required
                />
                <label
                  htmlFor="thumbnail"
                  className="block w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-lg text-center cursor-pointer hover:from-blue-600 hover:to-indigo-700 transition duration-200"
                >
                  {formData.thumbnail ? formData.thumbnail.name : "Choose Thumbnail"}
                </label>
              </div>
            </div>

            <div>
             
              <div className="relative w-full">
                <input
                  type="file"
                  name="movieUrl"
                  accept="video/*"
                  onChange={handleFileChange}
                  id="movieUrl"
                  className="absolute w-full h-full opacity-0 cursor-pointer"
                  required
                />
                <label
                  htmlFor="movieUrl"
                  className="block w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-lg text-center cursor-pointer hover:from-blue-600 hover:to-indigo-700 transition duration-200"
                >
                  {formData.movieUrl ? formData.movieUrl.name : "Choose Movie File"}
                </label>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-4 bg-purple-500  text-white font-bold rounded-lg shadow-lg hover:bg-purple-600 focus:outline-none transition duration-200"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <Loader className="size-6 animate-spin mx-auto" />
              ) : (
                <Upload className="inline-block mr-2" />
              )}
              {loading ? "Uploading..." : "Upload Movie"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default MovieUploadForm;
