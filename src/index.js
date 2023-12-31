import './style.css';

import setupForm from './form';

const addTodo = function addTodo(todo) {
  console.log(todo);
};
const form = setupForm();
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', () => {
  const todo = form.runSubmit();
  if (todo) addTodo(todo);
});
