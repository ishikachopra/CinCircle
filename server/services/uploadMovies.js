import multer from "multer";
import s3 from "../config/s3.config";

const upload = multer({
    storage: multer.memoryStorage(),
});

const uploadToS3 = (file, folder) => {
    return new Promise((resolve, reject) => {
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `${folder}/${Date.now()}-${file.originalname}`,
            Body: file.buffer,
            ContentType: file.mimetype
        };

        s3.upload(params, (err, data) => {
            if (err) reject(err);
            else resolve(data.Location); // ✅ Returns S3 file URL
        });
    });
};

export { upload, uploadToS3 };
