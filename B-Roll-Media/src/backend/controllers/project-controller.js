const Projects = require("../models/project-model");

const getProjects = async (req, res) => {
  const project = await Projects.find();
  res.json(project);
};
const addProject = async (req, res) => {
  const { title, date, modalType, modalLink } = req.body;
  console.log(req.file);
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
};
const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    await Projects.findByIdAndDelete(id);
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: e });
  }
};
const updateProject = async (req, res) => {
  const { id } = req.params;
  const { title, date, modalType, modalLink } = req.body;
  const updateData = {
    title,
    date,
    modalType,
    modalLink,
  };

  if (req.file) {
    updateData.picture = req.file.filename;
  }

  try {
    const updatedProject = await Projects.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    res.status(200).json({ data: { project: updatedProject } });
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: e });
  }
};
module.exports = { getProjects, addProject, deleteProject, updateProject };
