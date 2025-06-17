const express = require("express");
const router = express.Router();


const {getTasks, getTask, updateTask,deleteTask,createTask} = require("../controllers/taskController")

//getting all the task
router.route("/").get(getTasks);
router.route("/").post(createTask)
router.route("/:id").get(getTask);
router.route("/:id").put(updateTask);
router.route("/:id").delete(deleteTask)
router.route("/:id").patch(deleteTask)


module.exports = router;
