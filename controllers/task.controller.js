const Task = require("../models/Task");

module.exports.createTask = async (req, res) => {
  try {
    const { body } = req;

    const task = await Task.create(body);

    res.status(201).json(task);
  } catch {
    res.status(400).json({ error: "The task could not be created", details: error.toString() });
  }
};

module.exports.updateTask = async (req, res) => {
  try {
    const { params: { id }, body } = req;

    const task = await Task.update(id, body);

    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
};

module.exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.getTasks();

    res.status(200).json(tasks);
  } catch {
    res.status(404).json({ error: "Error retrieving tasks" });
  }
};

module.exports.getTask = async (req, res) => {
  try {
    const { params: { id } } = req;

    const task = await Task.getTask(id);

    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({ error: error.toString() });
  }
};

module.exports.deleteTask = async (req, res) => {
  try {
    const { params: { id } } = req;

    await Task.delete(id);

    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
};
