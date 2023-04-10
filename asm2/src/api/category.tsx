import instance from "./instance";

const getAllCategory = () => {
    return instance.get("/categories")
}
const getCategory = (id: string | number) => {
    return instance.get(`/categories/${id}?_embed=product`)
}
export {getAllCategory, getCategory}