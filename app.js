const express= require ('express')
const app=express()
const cors=require('cors')
app.use(express.json())
const productRoutes = require("./routes/productRouter");
const reviewRoutes = require("./routes/reviewRouter");
var corOptions={
origin:'https://localhost:5000'
}

app.use(cors(corOptions))
app.use(express.urlencoded({extended:true}))

app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);
app.get('/',(req,res)=>{

    res.json({message:'hello from Api'})
})
const port = 5000;
app.listen(port, () => {
  console.log("listen at port " + port);
});
