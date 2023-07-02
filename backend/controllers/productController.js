const ProductModel = require('../models/productModel');

const productController = {
  getCategoryAllProducts: async (req, res) => {
    const id = req.params.id;
    const products = await ProductModel.find({ categoryID: id });
    if (products == undefined) {
      res.status(404).send("products not found!");
    } else {
      res.status(200).send(products);
    }
  },
  getAllProducts: async (req, res) => {
    const products = await ProductModel.find();
    if (products == undefined) {
      res.status(404).send("products not found!");
    } else {
      res.status(200).send(products);
    }
  },
  post: async (req, res) => {
    const { name, title, price, categoryID } = req.body;

    const product = new ProductModel({
      name: name,
      title: title,
      price: price,
      categoryID: categoryID,
    });
    await product.save();
    res.status(201).send("product created successfully");
  },
  delete: async (req, res) => {
    const id = req.params.id;
    const deletedProduct = await ProductModel.findByIdAndDelete(id);
    if (!deletedProduct) {
      res.status(404).send("product not found!");
    } else {
      res
        .status(203)
        .send({ data: deletedProduct, message: "product deleted successfully!" });
    }
  },
  edit: async (req, res) => {
    const id = req.params.id;
    const { name, title,price,categoryID  } = req.body;
    console.log("name: ", name);
    const existedProduct = await ProductModel.findByIdAndUpdate(id, {
      name: name,
      title: title,
      price: price,
      categoryID: categoryID,
    });
    if (existedProduct == undefined) {
      res.status(404).send("product not found!");
    } else {
      res.status(200).send(`${name} updated successfully!`);
    }
  },
};

module.exports  = productController