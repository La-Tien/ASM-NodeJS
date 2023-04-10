import User from "../models/user"
import { signinSchema, signupSchema } from "../Schema/auth"
import bcrypt from "bcryptjs"
import Jwt from "jsonwebtoken"


export const signup = async (req, res) => {
    try {
        const { error } = signupSchema.validate(req.body, { abortEarly: false });

        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors
            })
        }
        const userExist = await User.findOne({ email: req.body.email })
        if (userExist) {
            return res.status(400).json({
                message: "Emai da ton tai"
            })
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });

        const accessToken = Jwt.sign({ _id: user._id }, "La Thi Tien", { expiresIn: "1d" });
        return res.status(200).json({
            message: "Dang ky thanh cong",
            accessToken,
            user
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        })
    }
}

export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { error } = signinSchema.validate(req.body, { abortEarly: false })
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors
            })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                message: "Ban chua dang ki tai khoan"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Mat khau khong dung"
            })
        }
        const accessToken = Jwt.sign({ _id: user._id }, "La Thi Tien", { expiresIn: "1d" });

        return res.status(200).json({
            message: "Dang nhap thanh cong",
            accessToken,
            user
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}