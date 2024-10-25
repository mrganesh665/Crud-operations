const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/products.models.js');
const ProductRoute = require("./routes/product.route.js")
const app = express();

// middleware
app.use(express.json());

//routes
app.use("/api/products", ProductRoute);



app.get('/', (req,res)=>{
    res.send("Hello from API --server");
})


mongoose.connect('mongodb+srv://admin:D4R7KZFTuf5hlVbl@backenddb0.lmokh.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB0')
.then(()=>{
    console.log("connected to MongoDB!");
    app.listen(3000, ()=>{
        console.log("Server running on port 3000");
       });
})
.catch(()=>{
    console.log("connection failed!");
})



   