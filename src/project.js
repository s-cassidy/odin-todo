class Project {
  constructor(name = 'Default') {
    this.name = name;
    this.todoList = [];
  }

  addTodo(todo) {
    this.todoList.push(todo);
  }

  removeTodo(todo) {
    this.todoList = this.todoList.filter((entry) => entry !== todo);
  }
}
