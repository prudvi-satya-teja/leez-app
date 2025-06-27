const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
require("dotenv").config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
    
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "CloudinaryDemo",
        allowed_formats: ["jpeg", "png", "jpg"],
        transformation: [{ width: 800, height: 600, crop: "limit", quality: "auto" }],
    },
});

const upload = multer({ storage });

module.exports = { upload };
