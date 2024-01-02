import './style.css';

import setupForm from './form';
import TodoItem from './todoitem';
import projects from './projectsList';
import { initProjectsMenu, updateProjectsMenu } from './projectSelector';

const form = setupForm();
initProjectsMenu();
updateProjectsMenu();
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', () => {
  const todoFormData = form.runSubmit();
  if (todoFormData) {
    const todo = new TodoItem(todoFormData);
    projects.currentProject.addTodo(todo);
  }
});
