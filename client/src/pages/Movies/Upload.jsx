import { useState } from "react";
import { motion } from "framer-motion";
import { Loader, Upload } from "lucide-react";
import toast from "react-hot-toast";

const MovieUploadForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    trailer: "",
    movie: null,
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
    data.append("trailer", formData.trailer);
    data.append("image", formData.image);
    data.append("movie", formData.movie);

    try {
      const response = await fetch("http://localhost:8000/api/movies/upload", {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      console.log("Server Response:", result);

      if (response.ok) {
        toast.success("Movie uploaded successfully!");
        setFormData({
          title: "",
          description: "",
          image: null,
          trailer: "",
          movie: null,
        });
      } else {
        toast.error(result.error || "Upload failed.");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
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
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
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
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Movie Poster</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full p-3 bg-gray-700 text-white rounded-lg cursor-pointer focus:ring-2 focus:ring-green-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Trailer (YouTube Link)
              </label>
              <input
                type="url"
                name="trailer"
                placeholder="Enter YouTube trailer link"
                value={formData.trailer}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Full Movie</label>
              <input
                type="file"
                name="movie"
                accept="video/*"
                onChange={handleFileChange}
                className="w-full p-3 bg-gray-700 text-white rounded-lg cursor-pointer focus:ring-2 focus:ring-green-400 focus:outline-none"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
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
