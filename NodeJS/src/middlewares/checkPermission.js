import Jwt from "jsonwebtoken";
import User from "../models/user";

export const checkPermission = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(400).json({
                message: "Ban chua dang nhap"
            })
        }
        const token = req.headers.authorization.split(" ")[1];
        Jwt.verify(token, "La Thi Tien", async (error, payload) => {
            if(error){
                if(error.name == "TokenExpiredError"){
                    return res.json({
                        message: "Token het han"
                    })
                }
                if(error.name == "JsonWebTokenError"){
                    return res.json({
                        message: "Token khong hop le"
                    })
                }
            }
            const user = await User.findById(payload._id);
            console.log("user", user);

            if (user.role !== "admin") {
                return res.status.json({
                    message: "Ban khong co quyen truy cap tai nguyen nay"
                })
            }
            next();
        });


    } catch (error) {

    }
}