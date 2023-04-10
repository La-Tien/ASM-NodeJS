import Joi from "joi";

export const signupSchema = Joi.object({
    name: Joi.string().required().messages({
        "string.empty": "Ten khong duoc de trong",
        "any.required": "Truong ten la bat buoc"
    }),
    email: Joi.string().email().required().messages({
        "string.empty": "Email khong duoc de trong",
        "any.required": "Truong email la bat buoc",
        "string.email": "Email khong dung dinh dang"
    }),
    password: Joi.string().required().min(6).messages({
        "string.empty": "Mat khau khong duoc de trong",
        "any.required": "Truong mat khau la bat buoc",
        "string.min": "Mat khau phai co it nhat {#limit} ki tu"
    }),
    confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
        "string.empty": "Xac nhan mat khau khong duoc de trong",
        "any.required": "Truong xac nhan mat khau la bat buoc",
        "any.only": "Xac nhan mat khau khong khop"
    }),
})
export const signinSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "string.empty": "Email khong duoc de trong",
        "any.required": "Truong email la bat buoc",
        "string.email": "Email khong dung dinh dang"
    }),
    password: Joi.string().required().min(6).messages({
        "string.empty": "Mat khau khong duoc de trong",
        "any.required": "Truong mat khau la bat buoc",
        "string.min": "Mat khau phai co it nhat {#limit} ki tu"
    })
})

