const db=require('../models')
const Product=db.products
const Review=db.reviews

const addReviews=async(req,res)=>{

let info ={
rating:req.body.rating,
description:req.body.description

}
const review=await Review.create(info)
res.status(200).send(review)
console.log(review)


}
module.exports=
{
    addReviews
}