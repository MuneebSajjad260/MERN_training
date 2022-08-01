const db=require('../models')
const Product=db.products
const Review=db.reviews

const addProducts =async (req,res)=>{

let info ={
title:req.body.title,
price:req.body.price,
description:req.body.description,
}
const product=await Product.create(info)
res.status(200).send(product)
console.log(product)
}
const getProducts=async (req,res)=>{

const products = await Product.findAll({})
res.status(200).send(products)
console.log(products)
}

const getoneProduct =async (req,res)=>{
id=req.params.id
    const product = await Product.findOne({where:{id:id}})
    res.status(200).send(product)
console.log(product)
}
const updateProduct =async (req,res)=>{
id=req.params.id
    const product = await Product.update(req.body,{where:{id:id}})
    res.status(200).send(product)
console.log(product)
}
const deleteProduct =async (req,res)=>{
id=req.params.id
    await Product.destroy({where:{id:id}})
    res.status(200).send('product is deleted')
console.log('product is deleted')
}

module.exports={
    addProducts,
    getProducts,
    getoneProduct,
    updateProduct,
    deleteProduct,
    

}