const express = require('express')
const validateBody = require('./middleware/validate.mw')
const TaskController = require('./controllers/task.controller')

const app = express()

PORT = 3000

app.listen(PORT)

const bodyParser = express.json()

app.get('/tasks', TaskController.getTasks)
app.get('/task/:id', TaskController.getTask)
app.post('/task', bodyParser, validateBody, TaskController.createTask)
app.put('/task/:id', bodyParser, validateBody, TaskController.updateTask)
app.delete('/task/:id', TaskController.deleteTask)