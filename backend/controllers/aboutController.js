const AboutModel = require("../models/aboutModel");

const aboutController = {
 
  getAllAbouts: async (req, res) => {
    const abouts = await AboutModel.find();
    if (abouts == undefined) {
      res.status(404).send("abouts not found!");
    } else {
      res.status(200).send(abouts);
    }
  },
  getByID: async (req, res) => {
    const id = req.params.id;
    const about = await AboutModel.findById(id);
    if (!about) {
      res.status(204).send("about not found!");
    } else {
      res.status(200).send({
        data: about,
        message: "data get success!",
      });
    }
  },

  post: async (req, res) => {
    const { imageURL, name, title, description } = req.body;

    const about = new AboutModel({
      imageURL: imageURL,
      name: name,
      title: title,
      description: description,
    });
    await about.save();
    res.status(201).send("about created successfully");
  },
  delete: async (req, res) => {
    const id = req.params.id;
    const deletedAbout = await AboutModel.findByIdAndDelete(id);
    if (!deletedAbout) {
      res.status(404).send("about not found!");
    } else {
      res.status(203).send({
        data: deletedAbout,
        message: "about deleted successfully!",
      });
    }
  },
  edit: async (req, res) => {
    const id = req.params.id;
    const { imageURL, name, title, description } = req.body;
    console.log("name: ", name);
    const existedAbout = await AboutModel.findByIdAndUpdate(id, {
        imageURL: imageURL,
        name: name,
        title: title,
        description: description,
    });
    if (existedAbout == undefined) {
      res.status(404).send("about not found!");
    } else {
      res.status(200).send(`${name} updated successfully!`);
    }
  },
};

module.exports = aboutController;
