import express from "express";
import { create, get, getAllCat } from "../controllers/category";
import { checkPermission } from "../middlewares/checkPermission";

const router = express.Router()

router.post("/categories", checkPermission, create)
router.get("/categories/:id", get)
router.get("/categories", getAllCat)


export default router