const bodyParser = require("body-parser");
const express = require("express");
require("dotenv").config();
const controller = require("./controllers/task.controller");
const validation = require("./middleware/task.validator");

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get("/tasks", controller.getTasks);
app.get("/task/:id", controller.getTask);
app.post("/task", validation, controller.createTask);
app.put("/task/:id", validation, controller.updateTask);
app.delete("/task/:id", controller.deleteTask);

app.listen(port, () => console.log(`Server has been started on port ${port}`));
