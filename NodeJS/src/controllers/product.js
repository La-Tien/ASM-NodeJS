// import axios from "axios";
import Joi from "joi";
import product from "../models/product"
import category from "../models/category";
// import { path } from "express/lib/application";

const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    images: Joi.required(),
    desc: Joi.string(),
    categoryId: Joi.string().required()
})

export const getAll = async function (req, res) {
    const { _sort = "createAt", _order = "asc", _limit = 10, _page = 1 } = req.query;

    const options = {
        page: _page,
        limit: _limit,
        sort: {
            [req.query._sort]: req.query._order === "desc" ? -1 : 1
        }
    }
    try {
        // Chờ đợi kết quả trả về từ JSON server
        // const { data } = await axios.get(`http://localhost:3001/products`);
        const data = await product.find()
        // console.log(data)

        // const { docs, totalDocs, totalPages } = await product.paginate({}, options);
        if (data.length === 0) {
            return res.status(400).json({ message: "Khong co san.pham nao" });
        }
        // Trả về kết quả
        // return res.status(200).json({ data: docs, totalDocs, totalPages });
        return res.status(200).json(data);

    } catch (error) {
        return res.json({
            message: error.message,
        });
    }
}

export const get = async function (req, res) {
    try {
        // const { data } = await axios.get(`http://localhost:3000/products/${req.params.id}`);
        const data = await product.findOne({ _id: req.params.id }).populate(
            {
                path: "categoryId",
                select: "-__v"
            }
        )
        if (!data) {
            return res.status(400).json({ message: "Khong co san.pham nao" });
        }
        return res.json(data);
    } catch (error) {
        return res.json({
            message: error.message,
        });
    }
}

export const remove = async function (req, res) {
    try {
        // const { data } = await axios.delete(`http://localhost:3000/products/${req.params.id}`);
        const products = await product.findByIdAndDelete(req.params.id)

        return res.json({ message: "Xoa thanh cong", products });
    } catch (error) {
        return res.json({
            message: error.message,
        });
    }
}

export const create = async function (req, res) {
    try {
        const body = req.body;

        const { error } = productSchema.validate(body);
        if (error) {
            const errors = error.details.map((errorItem) => errorItem.message)
            return res.status(400).json({
                message: errors,
            })
        }

        // const { data } = await axios.post("http://localhost:3000/products", body);
        const Products = await product.create(body);
        await category.findByIdAndUpdate(Products.categoryId, {
            $addToSet: {
                products: Products._id
            }
        })
        if (!Products) {
            return res.status(400).json({ message: "Them san pham  that bai" });
        }
        return res.json({
            message: "Them san pham thanh cong",
            Products
        });
    } catch (error) {
        return res.json({
            message: error.message,
        });
    }
}

export const update = async function (req, res) {
    try {
        const id = req.params.id;
        const body = req.body;
        // const { data } = await axios.put(`http://localhost:3000/products/${id}`, body);
        const data = await product.findOneAndUpdate({ _id: id }, body, { new: true });
        if (!data) {
            return res.status(400).json({ message: "Cap nhat san pham  that bai" });
        }
        return res.json({
            message: "Cap nhat san pham thanh cong",
            data
        });
    } catch (error) {
        return res.json({
            message: error.message,
        });
    }
}

