export const unpackTodoFormData = function unpackTodoFormData(todoFormData) {
  return {
    title: todoFormData.get('title'),
    description: todoFormData.get('description'),
    priority:
      todoFormData.get('priority') === 'none'
        ? ''
        : todoFormData.get('priority'),
    dueDate: new Date(todoFormData.get('due-date')),
    id: Math.random().toString(16).slice(2),
    isDone: false,
  };
};
export class TodoItem {
  constructor(todoData) {
    this.title = todoData.title;
    this.description = todoData.description;
    this.priority = todoData.priority;
    this.id = todoData.id;
    this.dueDate = todoData.dueDate;
    this.isDone = todoData.isDone;
  }

  setDone = function setDone() {
    this.isDone = true;
  };

  setNotDone = function setNotDone() {
    this.isDone = false;
  };
}
