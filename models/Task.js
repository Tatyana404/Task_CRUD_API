const { v4: uuidv4 } = require("uuid");

const database = new Map();

class Task {
  constructor(body) {
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.userId = uuidv4();
    this.isDone = false;
    this.id = uuidv4();
    this.body = body;
  }

  static async create({ body }) {
    const newTask = new Task(body);

    database.set(newTask.id, newTask);

    return newTask;
  }

  static async update(id, { body, isDone }) {
    const task = database.get(id);

    if (!task) {
      throw new Error("Task not found");
    }

    task.body = body || task.body;
    task.isDone = isDone || isDone === false ? isDone : task.isDone;
    task.updatedAt = new Date();

    database.set(id, task);

    return task;
  }

  static async getTasks() {
    return [...database.values()];
  }

  static async getTask(id) {
    const task = database.get(id);

    if (!task) {
      throw new Error("Task not found");
    }

    return task;
  }

  static async delete(id) {
    const task = database.get(id);

    if (!task) {
      throw new Error("Task not found");
    }

    return database.delete(id);
  }
}

module.exports = Task;
