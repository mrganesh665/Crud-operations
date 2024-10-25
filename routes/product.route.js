const express = require("express");
const Product = require("../models/products.models.js");
const router = express.Router();
const { getProducts ,getProduct,postProduct, putProduct, deleteProduct} = require("../controllers/product.controller.js");

router.get("/", getProducts);
router.get("/:id", getProduct);

router.post("/", postProduct);

//update a product
router.put("/:id", putProduct);

// ///delete a product
router.delete("/:id",deleteProduct);

module.exports = router;