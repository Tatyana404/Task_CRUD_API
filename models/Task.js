const db = new Map()

class Task {
  constructor ({ body, isDone }) {
    this.createdAt = new Date()
    this.userId = `${db.size + 1}`
    this.isDone = isDone
    this.body = body
    db.set(this.userId, this)
    return Promise.resolve(this)
  }

  async update (values) {
    const oldTask = db.get(this.userId)
    const newTask = await new Task({
      ...oldTask,
      ...values
    })
    const idToDelete = newTask.userId
    newTask.userId = oldTask.userId
    newTask.createdAt = oldTask.createdAt
    newTask.updatedAt = new Date()
    db.set(oldTask.userId, newTask)
    await Task.deleteById(idToDelete)
    return newTasc
  }

  async delete () {
    return db.delete(this.userId)
  }
}

Task.deleteById = async id => {
  return db.delete(id)
}

Task.findOne = async id => {
  return db.get(id)
}

Task.findAll = async () => {
  return [...db.values()]
}

module.exports = Task
