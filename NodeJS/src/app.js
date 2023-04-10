import  express  from "express";
import productRouter from "./router/product";
import userRouter from "./router/auth"
import categoryRouter from "./router/category"
import cors from "cors";
import mongoose from "mongoose";
import uploadImageRouter from './router/UploadImage'
const app = express();

// middlewares
app.use(express.json());
app.use(cors())
// router
app.use("/api", productRouter);
app.use("/api", userRouter);
app.use("/api", categoryRouter);
app.use("/api", uploadImageRouter);


// server
// app.listen(8080, function() {
//     console.log("Server is running port 8080")
// })

mongoose.connect("mongodb://127.0.0.1:27017/we17301")

export const viteNodeApp = app;
// const http = require("http");

// http.createServer(function(req, res){
//     const products = [
//         {id: 1, name: "Products 1"},
//         {id: 2, name: "Products 2"}
//     ];
//     if(req.url == "/products"){
//         res.setHeader("Content-Type", "text/html")
//         res.end(`<form action="/products" method="post">
//             <input type="text" name="productName" />
//             <button>Submit</button>
//         </form>`);

//         res.setHeader("Content-Type", "application/json");
//         products.push({id: 3, name: "Products 3"})
//         res.end(JSON.stringify(products))
//     }

// }).listen(8080, function(){
//     console.log("Server is running port 8080 ")
// })


// const products = [
//     { id: 1, name: "Products 1" },
//     { id: 2, name: "Products 2" }
// ];


// app.get("/", function (req, res) {
//     res.send(`<form action="/products" method="post">
//                <input type="text" name="productName" />
//                 <button>Submit</button>
//             </form>`)
// }
// )
// if (req.url == "/products"&& req.method == "POST") {
//     res.setHeader("Conten-Type",)
// }

// tra ve danh sach
// app.get("/products", function( req, res){
//     res.json(products);
    // app.get("/api/products", async function(req, res){
    //     const {data} = await axios.get("http://localhost:3001/products");
    //     res.json(data);
    // });
// });

// Tra ve 1 phan tu
// app.get("products/:id", function ( req,res){
//     const id = req.params.id;
//     const product = products.find((product) => product.id == id);
//     res.json({
//         message: "Product found",
//         product,
//     })
// })
// app.get("/api/products/:id", async function(req, res){
//     // cho doi ket qua tra ve tu Json server
//     const {data} = await axios.get("http://localhost:3001/products" + req.params.id)
//     // tra ve ket qua
//     res.json(data)
// });
// app.listen(8080, function(){
//         console.log("Server is running port 8080 ")
//     })