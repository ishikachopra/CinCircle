import express from "express";
import { uploadMovie, watchMovie } from "../controller/movie.controller.js";
import { isAdmin } from "../middleware/adminAuth.js";
import { upload } from "../services/uploadMovies.js";

const router = express.Router();

// ✅ Admin-Only Route
router.post(
    "/upload",
    isAdmin,
    upload.fields([
        { name: "thumbnail", maxCount: 1 },
        { name: "movie", maxCount: 1 }
    ]),
    uploadMovie
);

router.get("/:movieId/watch", watchMovie);

export default router;
