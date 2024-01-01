class Project {
  constructor(name = 'Default') {
    this.name = name;
    this.todoList = [];
    this.id = Math.random().toString(16).slice(2);
  }

  addTodo(todo) {
    this.todoList.push(todo);
  }

  removeTodo(todoId) {
    this.todoList = this.todoList.filter((entry) => entry.id !== todoId);
  }

  showTodos() {
    console.log(this.todoList);
  }
}

export default Project;
