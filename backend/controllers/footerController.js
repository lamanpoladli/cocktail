const FooterModel = require('../models/footerModel');

const FooterController = {
    getAll: async (req, res) => {
        const Footer = await FooterModel.find();
        if (Footer == undefined) {
            res.status(404).send("Footers not found!");
          } else {
            res.status(200).send(Footer);
          }
    },
    getByID: async (req, res) => {
        const id = req.params.id;
       
        const footer = await FooterModel.findById(id);
        if (!footer) {
          res.status(204).send("footers not found!");
        } else {
          res.status(200).send({
            data: footer,
            message: "data get success!",
          });
        }
      },

    post: async (req, res) => {
        const { imageURL } = req.body;
        const newFooter = new FooterModel({
            imageURL: imageURL,
        });
        await newFooter.save();
        res.status(201).send("created");
    },
    delete: async (req, res) => {
        const id = req.params.id;
        const deletedFooter = await FooterModel.findByIdAndDelete(id);
        if (!deletedFooter) {
          res.status(404).send("footer not found!");
        } else {
          res.status(203).send({
            data: deletedFooter,
            message: "footer deleted successfully!",
          });
        }
    },
    edit: async (req, res) => {
        const id = req.params.id;
        const {imageURL } = req.body;
        const existedFooter = await FooterModel.findByIdAndUpdate(id, {
            imageURL: imageURL,
        });
        if (existedFooter == undefined) {
            res.status(404).send("footer not found!");
          } else {
            res.status(200).send(`updated successfully!`);
          }
    },
};

module.exports = FooterController