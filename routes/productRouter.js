const express = require("express");
const router = express.Router();

const productController=require('../controllers/productController')

 router.post('/addProducts',productController.addProducts)
 router.get('/getProducts',productController.getProducts)
 router.get('/getoneProduct/:id',productController.getoneProduct)
 router.put('/updateProduct/:id',productController.updateProduct)
 router.delete('/deleteProduct/:id',productController.deleteProduct)
 
 module.exports=router