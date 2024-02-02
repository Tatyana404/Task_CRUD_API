const database = new Map();

class Task {
  constructor({ body, isDone }) {
    this.createdAt = new Date();
    this.userId = `${database.size + 1}`;
    this.isDone = isDone;
    this.body = body;

    database.set(this.userId, this);

    return Promise.resolve(this);
  }

  async update(values) {
    const oldTask = database.get(this.userId);
    const newTask = new Task({
      ...oldTask,
      ...values,
    });

    const idToDelete = newTask.userId;

    newTask.userId = oldTask.userId;
    newTask.createdAt = oldTask.createdAt;
    newTask.updatedAt = new Date();

    database.set(oldTask.userId, newTask);

    await Task.deleteById(idToDelete);

    return newTask;
  }

  async delete() {
    return database.delete(this.userId);
  }

  async deleteById(id) {
    return database.delete(id);
  }

  async findOne(id) {
    return database.get(id);
  }

  async findAll() {
    return [...database.values()];
  }
}

module.exports = Task;
