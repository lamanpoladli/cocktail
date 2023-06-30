const FooterModel = require('../models/footerModel');

const FooterController = {
    getAll: async (req, res) => {
        const Footer = await FooterModel.find();
        if (Footer === undefined) {
            res.status(404).send("Data not found");
        } else {
            res.status(200).send({
                data: Footer,
                message: "Data get success!",
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
        const Footer = await FooterModel.findByIdAndDelete(id);
        await FooterModel.deleteMany({ FooterID: id });
        if (Footer === undefined) {
            res.status(404).send("Data not found");
        } else {
            res.status(203).send({
                data: Footer,
                message: "Data deleted successfully",
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
            res.status(404).send("Data not found!");
        } else {
            res.status(200).send('Data updated successfully!');
        }
    },
};

module.exports = FooterController