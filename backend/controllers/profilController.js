const ProfilModel = require('../models/profilModel');

const ProfilController = {
    getAll: async (req, res) => {
        const Profil = await ProfilModel.find();
        if (Profil === undefined) {
            res.status(404).send("Data not found");
        } else {
            res.status(200).send({
                data: Profil,
                message: "Data get success!",
            });
        }
    },

    post: async (req, res) => {
        const { imageURL } = req.body;
        const newProfil = new ProfilModel({
            imageURL: imageURL,
        });
        await newProfil.save();
        res.status(201).send("created");
    },
    delete: async (req, res) => {
        const id = req.params.id;
        const Profil = await ProfilModel.findByIdAndDelete(id);
        await ProfilModel.deleteMany({ ProfilID: id });
        if (Profil === undefined) {
            res.status(404).send("Data not found");
        } else {
            res.status(203).send({
                data: Profil,
                message: "Data deleted successfully",
            });
        }
    },
    edit: async (req, res) => {
        const id = req.params.id;
        const {imageURL } = req.body;
        const existedProfil = await ProfilModel.findByIdAndUpdate(id, {
            imageURL: imageURL,
        });
        if (existedProfil == undefined) {
            res.status(404).send("Data not found!");
        } else {
            res.status(200).send('Data updated successfully!');
        }
    },
};

module.exports = ProfilController