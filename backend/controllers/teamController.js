const TeamModel = require('../models/teamModel');

const TeamController = {
    getAll: async (req, res) => {
        const Team = await TeamModel.find();
        if (Team === undefined) {
            res.status(404).send("Data not found");
        } else {
            res.status(200).send({
                data: Team,
                message: "Data get success!",
            });
        }
    },

    post: async (req, res) => {
        const { name,imageURL,title,description } = req.body;
        const newTeam = new TeamModel({
            name: name,
            imageURL: imageURL,
            title: title,
            description: description
        });
        await newTeam.save();
        res.status(201).send("created");
    },
    delete: async (req, res) => {
        const id = req.params.id;
        const Team = await TeamModel.findByIdAndDelete(id);
        await TeamModel.deleteMany({ TeamID: id });
        if (Team === undefined) {
            res.status(404).send("Data not found");
        } else {
            res.status(203).send({
                data: Team,
                message: "Data deleted successfully",
            });
        }
    },
    edit: async (req, res) => {
        const id = req.params.id;
        const {name,imageURL,title,description } = req.body;
        const existedTeam = await TeamModel.findByIdAndUpdate(id, {
            name: name,
            imageURL: imageURL,
            title: title,
            description: description
        });
        if (existedTeam == undefined) {
            res.status(404).send("Data not found!");
        } else {
            res.status(200).send('Data updated successfully!');
        }
    },
};

module.exports = TeamController