const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: String, 
    price : String,
    image: String,
    details: String
});

module.exports = mongoose.model("Product", ProductSchema);