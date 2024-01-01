class TodoItem {
  constructor(todoFormData) {
    this.title = todoFormData.get('title');
    this.description = todoFormData.get('description');
    this.priority = todoFormData.get('priority');
    this.id = Math.random().toString(16).slice(2);
    this.isDone = false;
  }
}

export default TodoItem;
