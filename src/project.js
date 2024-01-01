import displayTodoList from './listDisplay';

class Project {
  constructor(name = 'Default') {
    this.name = name;
    this.todoList = [];
    this.id = Math.random().toString(16).slice(2);
  }

  addTodo(todo) {
    this.todoList.push(todo);
    displayTodoList(this);
  }

  removeTodo(todoId) {
    this.todoList = this.todoList.filter((entry) => entry.id !== todoId);
    displayTodoList(this);
  }
}

export default Project;
