class Task {
  constructor({ id, title, description, completed, userId }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.userId = userId;
  }
}

module.exports = Task;
