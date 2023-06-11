const imageModel = require('../models/imageModel');

const imageController = {
    getAllImages: async (req, res) => {
        const images = await imageModel.find();
        if (images == undefined) {
            res.status(404).send("images not found!");
        } else {
            res.status(200).send(images);
        }
    },
    getImageByID: async (req, res) => {
        const id = req.params.id;
        const image = await imageModel.findById(id);
        console.log("image found: ", image);
        if (!image) {
          res.status(204).send("image not found!");
        } else {
          res.status(200).send({
            data: image,
            message: "data get success!",
          });
        }
      },
    post: async (req, res) => {
        const { imageUrl} = req.body;

        const image = new imageModel({
            imageUrl: imageUrl
        });
        await image.save();
        res.status(201).send("image created successfully");
    },
    edit: async (req, res) => {
        const id = req.params.id;
        const { imageUrl} = req.body;
        const existedImage = await imageModel.findByIdAndUpdate(id, {
          imageUrl: imageUrl
        });
        if (existedImage == undefined) {
          res.status(404).send("image not found!");
        } else {
          res.status(200).send(`${imageUrl} updated successfully!`);
        }
      },
};

module.exports = imageController