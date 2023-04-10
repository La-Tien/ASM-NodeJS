import { v2 as cloudinary } from "cloudinary"
import multer from "multer"
import { CloudinaryStorage } from 'multer-storage-cloudinary'


export const uploadMulter = (req, res, next) => {
    cloudinary.config({
        cloud_name: "duqn6uvp2",
        api_key: "714129162579848",
        api_secret: "o2zsCuHUFLJ3WRc6rUTrLR7UUuc"
    })

    const storage = new CloudinaryStorage({
        cloudinary: cloudinary,
        params: {
            forder: "ASM-TypeScript",
            format: "png",
            public_id: "olympic_flag"
        }
    })

    const upload = multer({ storage: storage })
    req.files = upload.array("images", 10)
    next()
}