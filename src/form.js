import projects from './projectsList';
import refreshTodoListDisplay from './listDisplay';
import { unpackTodoFormData, TodoItem } from './todoitem';
import ProjectStorage from './store';

function setupForm() {
  const form = document.getElementById('todo-form');
  const todoTitleInput = document.getElementById('todo-title');
  const todoDescriptionInput = document.getElementById('todo-description');

  todoTitleInput.addEventListener('input', () =>
    todoTitleInput.classList.remove('invalid')
  );

  const clearForm = function clearForm() {
    todoTitleInput.value = '';
    todoDescriptionInput.value = '';
  };

  const runSubmit = function runSubmit() {
    if (todoTitleInput.validity.valueMissing) {
      todoTitleInput.classList.add('invalid');
      return null;
    }
    const todoEntry = new FormData(form);
    clearForm();
    return todoEntry;
  };

  const submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', () => {
    const todoFormData = runSubmit();
    if (todoFormData) {
      const todoData = unpackTodoFormData(todoFormData);
      const todoObject = new TodoItem(todoData);
      projects.currentProject.addTodo(todoObject);
      refreshTodoListDisplay(projects.currentProject);
      new ProjectStorage().save(projects.list);
    }
  });
}

export default setupForm;
