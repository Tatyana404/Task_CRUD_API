const express = require("express");
const { getTasks, getTask, createTask, updateTask, deleteTask } = require("../controllers/task.controller");
const { createValidator, updateValidator } = require("../middleware/task.validator");

const router = express.Router();

router.get("/", getTasks);

router.get("/:id", getTask);

router.post("/", createValidator, createTask);

router.patch("/:id", updateValidator, updateTask);

router.delete("/:id", deleteTask);

module.exports = router;
