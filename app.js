const bodyParser = require("body-parser");
const express = require("express");
require("dotenv").config();
const taskRouter = require("./routes/task");

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use("/api/task", taskRouter);

app.listen(port, () => console.log(`Server has been started on port ${port}`));
