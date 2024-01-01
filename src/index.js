import './style.css';

import setupForm from './form';
import Project from './project';
import todoItem from './todoitem';

const form = setupForm();
const submitButton = document.getElementById('submit-button');
const defaultProject = new Project();
submitButton.addEventListener('click', () => {
  const todoFormData = form.runSubmit();
  if (todoFormData) {
    const todo = new todoItem(todoFormData);
    defaultProject.addTodo(todo);
  }
  defaultProject.showTodos();
});
