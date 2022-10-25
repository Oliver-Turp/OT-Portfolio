const { Router } = require("express");
const router = new Router();
const { protect } = require("../middleware/authMiddleware");
const {
  getAllProjects,
  addProject,
  updateProject,
  deleteProject,
  getProject,
} = require("../controllers/projectsController");

// specifically protecting these routes from unauthorized access using the protect middleware
router.use("/projects/:id", protect);

// handling projects
router.route("/projects").get(getAllProjects).post(protect, addProject);
router
  .route("/projects/:id")
  .get(getProject)
  .put(updateProject)
  .delete(deleteProject);

module.exports = router;
