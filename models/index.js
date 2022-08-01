const dbconfig =require ('../dbconfig')
const {Sequelize,DataTypes}=require('sequelize')
const { dialect } = require('../dbconfig')
const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,{
    host:dbconfig.HOST,
    dialect:dbconfig.dialect,
    operatorsAliases:false

    }
)
sequelize.authenticate()
.then(()=>{
    console.log('connected')
})
.catch((err)=>{
    console.log('error',err)
})

const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize
db.products=require('./productModel.js')(sequelize,DataTypes)
db.reviews=require('./reviewModel.js')(sequelize,DataTypes)
db.products.hasMany(db.reviews)
db.sequelize.sync({force:true})
.then(()=>{
    console.log('resync is done')
})
module.exports=db