import mongoose from "mongoose";

const signupSchema = new mongoose.Schema(
    {
        name: String,
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            default: "member"
        }
    },
    { timestamps: true, versionKey: false }
)

export default mongoose.model("User", signupSchema)