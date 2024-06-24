const Projects = require("../models/project-model");

const getProjects = async (req, res) => {
  const project = await Projects.find();
  res.json(project);
};
const addProject = async (req, res) => {
  const { title, date, modalType, modalLink } = req.body;
  console.log(req.file.filename);
  const newProject = new Projects({
    title,
    date,
    modalType,
    modalLink,
    picture: req.file.filename,
  });
  try {
    await newProject.save();
    res.status(201).json({ data: { project: newProject } });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
  const project = {};
};
module.exports = { getProjects, addProject };
