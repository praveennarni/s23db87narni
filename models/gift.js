const mongoose = require("mongoose")
const giftSchema = mongoose.Schema({
gift_name: String,
numof_gifts: Number,
gift_value: String
})
module.exports = mongoose.model("gift",
giftSchema)