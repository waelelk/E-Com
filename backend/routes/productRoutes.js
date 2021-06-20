const express = require('express')
const router = express.Router()

const {getAllProducts, getProductById} = require('../controller/productController')

// get all products from the db
// /api/products
router.get('/', getAllProducts)


// get product by id
router.get('/:id', getProductById)

module.exports = router;