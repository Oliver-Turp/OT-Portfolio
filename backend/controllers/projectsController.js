const Project = require("../models/projectModel");
const {
  Types: { ObjectId },
} = require("mongoose");
const { CDN_BASE_URL } = require("../constants/cdnServer");
// const axios = require('axios').default
const fetch = require("node-fetch-commonjs");

// @desc Get all projects
// @route /api/admin/content/projects
// @method GET
// @access Public
async function getAllProjects(req, res) {
  try {
    let projects = await Project.find({});
    projects = projects.map((project) => {
      return {
        id: project._id,
        name: project.name,
        desc: project.desc,
        image: project.image,
        link: project.link,
        icon1: project.icon1,
        icon2: project.icon2,
        icon3: project.icon3,
        type: project.type,
        featured: project.featured,
      };
    });
    res.status(200).json({ success: true, data: { projects } });
  } catch (err) {
    res.status(200).json({
      success: true,
      message: "Server couldn't complete your request, try again",
    });
  }
}

// @desc Add a new projects
// @route /api/admin/content/projects
// @method POST
// @access Private
async function addProject(req, res) {
  const { id, name, desc, image, link, icon1, icon2, icon3, type, featured } =
    req.body;
  console.log(req.body);
  if (
    !name ||
    !desc ||
    !image ||
    !link ||
    !icon1 ||
    !icon2 ||
    !icon3 ||
    !type ||
    featured === undefined
  ) {
    return res.status(400).json({
      success: false,
      message: "Some fields were missing. Project not created",
    });
  }

  if (!id) {
    return res.status(400).json({ success: false, message: "Id is missing" });
  }
  try {
    let project = await Project.create({
      _id: id,
      name,
      desc,
      image,
      link,
      icon1,
      icon2,
      icon3,
      type,
      featured,
    });

    project = {
      id: project._id,
      name: project.name,
      desc: project.desc,
      image: project.image,
      link: project.link,
      icon1: project.icon1,
      icon2: project.icon2,
      icon3: project.icon3,
      type: project.type,
      featured: project.featured,
    };
    res.status(201).json({ success: "true", data: { project } });
  } catch (err) {
    if (err.message && err.message.includes("duplicate key error collection")) {
      return res
        .status(400)
        .json({ success: false, message: "Project title already exists" });
    }
    res
      .status(400)
      .json({ success: false, message: "Couldn't add project, try again" });
  }
}

// @desc Update a specific project
// @route /api/admin/content/projects/:id
// @method PUT
// @access Private
async function updateProject(req, res) {
  const { name, desc, image, link, icon1, icon2, icon3, type, featured } =
    req.body;
    console.log(featured)
  const { id } = req.params;
  if (
    !name ||
    !desc ||
    !image ||
    !link ||
    !icon1 ||
    !icon2 ||
    !icon3 ||
    !type ||
    featured === undefined
  ) {
    return res.status(400).json({
      success: false,
      message: "Some fields were missing. Project not updated",
    });
  }
  try {

    const oldProject = await Project.findOne({ _id: id });
    oldProject.name = name;
    oldProject.desc = desc;
    oldProject.image = image;
    oldProject.link = link;
    oldProject.icon1 = icon1;
    oldProject.icon2 = icon2;
    oldProject.icon3 = icon3;
    oldProject.type = type;
    oldProject.featured = featured;

    await oldProject.save();

    let project = await Project.findOne({ _id: id });
    project = {
      id: project._id,
      name: project.name,
      desc: project.desc,
      image: project.image,
      link: project.link,
      icon1: project.icon1,
      icon2: project.icon2,
      icon3: project.icon3,
      type: project.type,
      featured: project.featured,
    };
    res.status(200).json({ success: "true", data: { project } });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Couldn't update project, try again" });
  }
}

// @desc Delete a specific project
// @route /api/admin/content/projects/:id
// @method DELETE
// @access Private
async function deleteProject(req, res) {
  const { id } = req.params;
  if (!id) {
    return res
      .status(400)
      .json({ success: false, message: "No project id was specified" });
  }
  try {
    let project = await Project.findOne({ _id: id });
    //delete the project image from the cdn server also
    const resp = await fetch(`${CDN_BASE_URL}/upload`, {
      method: "DELETE",
      body: JSON.stringify({ url: project.image }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + req.token,
      },
    });
    const response = await resp.json();
    if (!response.success) {
      return res.status(500).json({
        success: false,
        message: "Server issues. Couldn't complete delete",
      });
    }

    await Project.deleteOne({ _id: id });
    project = {
      id: project._id,
      name: project.name,
      desc: project.desc,
      image: project.image,
      link: project.link,
      icon1: project.icon1,
      icon2: project.icon2,
      icon3: project.icon3,
      type: project.type,
      featured: project.featured,
    };
    res.status(200).json({ success: true, data: { project } });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ success: false, message: err });
  }
}

// @desc Get a specific project
// @route /api/admin/content/projects/:id
// @method GET
// @access Private
async function getProject(req, res) {
  const { id } = req.params;
  try {
    let project = await Project.findOne({ _id: id });
    if (project === null) {
      project = {};
    } else {
      project = {
        id: project._id,
        name: project.name,
        desc: project.desc,
        image: project.image,
        link: project.link,
        icon1: project.icon1,
        icon2: project.icon2,
        icon3: project.icon3,
        type: project.type,
        featured: project.featured,
      };
    }
    res.status(200).json({ success: true, data: { project } });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
}

module.exports = {
  getAllProjects,
  addProject,
  updateProject,
  deleteProject,
  getProject,
};
