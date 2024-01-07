import { TodoItem } from './todoitem';

class Project {
  constructor(name, todoListData, id) {
    this.name = name;
    this.todoList = todoListData
      ? todoListData.map((todo) => new TodoItem(todo))
      : [];
    this.id = id || Math.random().toString(16).slice(2);
  }

  addTodo(todo) {
    this.todoList.push(todo);
  }

  removeTodo(todoId) {
    this.todoList = this.todoList.filter((entry) => entry.id !== todoId);
  }
}

export default Project;
