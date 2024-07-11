const express = require('express');
const { getProducts, saveProduct, updateProduct, deleteProduct, getSignleProduct } = require('../controllers/product.controller');
const router = express.Router();

router.get('/products' , getProducts);
router.get('/products/:id' , getSignleProduct);
router.put('/product/:id' , updateProduct);
router.delete('/product/:id' , deleteProduct);
router.post('/product' , saveProduct);




module.exports = router;