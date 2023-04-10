import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import express from "express";
import cloudinary from "../config/cloudinaryConfig";
import {  deleteImage, uploadImage } from "../controllers/upload";

const router = express.Router()
const storgate = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        forder: "ASM-TypeScript",
        format: "png"
    }
})

const upload = multer({ storage: storgate })

router.post("/image/upload", upload.array("images", 10), uploadImage);
router.delete("/images/:publicId", deleteImage)

export default router