const mongoose = require("mongoose")
const giftSchema = mongoose.Schema({
gift_name: {type:String},
numof_gifts:{type:Number,
min:[0,"Minimum Number of Gifts must be 0"],
max:[100,"Maximum Number of Diamonds must be 100"]}, 

gift_value:{type:String} 
})
module.exports = mongoose.model("Gift",giftSchema)