const mongoose = require('mongoose');

//Product Model
const ProductModel = mongoose.model(
  "Products",
  new mongoose.Schema({
    name: String,
    title: String,
    price: Number,
    categoryID: { type: mongoose.Schema.Types.ObjectId, ref: "Categories" },
  })
);

module.exports = ProductModel