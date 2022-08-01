const mongoose=require('mongoose')
const imageSchema=mongoose.Schema({


profile:String



},
{
    timestamps:true
}
)
module.exports = mongoose.model("images", imageSchema);
