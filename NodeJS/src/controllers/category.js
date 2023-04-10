import category from "../models/category";
import Joi from "joi";
import Product from "../models/product";
const categorySchema = Joi.object({
    name: Joi.string().required()
})

export const getAllCat = async (req, res) => {
    try {
        const categories = await category.find();
        if (categories.length === 0) {
            return res.status(400).json({
                message: "Khong co san pham nao"
            })
        }
        return res.status(200).json(categories)
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}

export const get = async function (req, res) {
    try {
        // const { data } = await axios.get(`http://localhost:3000/products/${req.params.id}`);
        const category = await category.findById(req.params.id).populate("products")
        if (!category) {
            return res.status(400).json({ message: "Khong co danh muc nao" });
        }
        return res.json(category)
        // const products = await Product.find({ categoryId: req.params.id })
        // return res.json({ ...category.toObject(), products });
    } catch (error) {
        return res.json({
            message: error.message,
        });
    }
}


export const create = async function (req, res) {
    try {
        const body = req.body;

        const { error } = categorySchema.validate(body);
        if (error) {
            const errors = error.details.map((errorItem) => errorItem.message)
            return res.status(400).json({
                message: errors,
            })
        }

        // const { data } = await axios.post("http://localhost:3000/products", body);
        const data = await category.create(body)
        if (!data) {
            return res.status(400).json({ message: "Them danh muc  that bai" });
        }
        return res.json({
            message: "Them danh muc thanh cong",
            data
        });
    } catch (error) {
        return res.json({
            message: error.message,
        });
    }
}


export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const category = await category.findOneAndUpdate({ _id: id }, body, { new: true });
        if (!category) {
            return res.status(400).json({ message: "Cap nhat danh muc that bai" })
        }
        return res.json({
            message: "Cap nhat danh muc thanh cong",
            category
        })
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}

export const remove = async(req,res) =>{
    try {
        const category = await category.findByIdAndDelete(req.params.id);
        return res.json({
            message: "Xoa danh muc thanh cong",
            category
        })
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}