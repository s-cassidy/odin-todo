import projects from './projectsList';
import TodoItem from './todoitem';

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
      const todo = new TodoItem(todoFormData);
      projects.currentProject.addTodo(todo);
    }
  });
}

export default setupForm;
