import { array } from "joi"
import mongoose from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"
const productSchema = mongoose.Schema(
    {
        name: String,
        price: Number,
        images: {
            type: Array
        },
        desc: String,
        // price: Number,
        categoryId: {
            type: mongoose.Types.ObjectId,
            ref: "category"
        }
    },
    { timestamps: true, versionKey: false }
)

productSchema.plugin(mongoosePaginate)

export default mongoose.model("product", productSchema)