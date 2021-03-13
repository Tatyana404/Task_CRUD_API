const { Task } = require('../models')

module.exports.createTask = async (req, res) => {
  try {
    const { body: validatedTask } = req
    const task = await new Task(validatedTask)
    res.status(201).send(task)
  } catch (error) {
    res.status(400).send('CANT CREATE TASK')
  }
}

module.exports.getTasks = async res => {
  try {
    const tasks = await Task.findAll()
    res.status(200).send(tasks)
  } catch (error) {
    res.status(404).send('NO TASKS')
  }
}

module.exports.getTask = async (req, res) => {
  try {
    const {
      params: { id }
    } = req
    const foundTask = await Task.findOne(id)
    res.status(200).send(foundTask)
  } catch (error) {
    res.status(404).send('NO TASK')
  }
}

module.exports.updateTask = async (req, res) => {
  try {
    const {
      params: { id },
      body
    } = req
    const foundTask = await Task.findOne(id)
    const updateTask = await foundTask.update(body)
    res.status(202).send(updateTask)
  } catch (error) {
    res.status(400).send('Cant update')
  }
}

module.exports.deleteTask = async (req, res) => {
  try {
    const { params } = req
    const foundUser = await Task.findOne(params.id)
    const verdict = await foundUser.delete()
    res.send({ verdict })
  } catch (error) {
    res.status(400).send('CANT DELETE')
  }
}
