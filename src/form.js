function setupForm() {
  const form = document.getElementById('todo-form');
  const todoTitleInput = document.getElementById('todo-title');
  const todoDescriptionInput = document.getElementById('todo-description');
  const todoPrioritySelection = document.getElementById('todo-priority');
  const submitButton = document.getElementById('submit-button');

  const clearForm = function clearForm() {
    todoTitleInput.value = '';
    todoDescriptionInput.value = '';
  };

  const runSubmit = function runSubmit() {
    if (todoTitleInput.validity.valueMissing) {
      console.log('Nothing in title');
    }

    const todoEntry = new FormData(form);
    clearForm();
    console.log(todoEntry);
    return todoEntry;
  };

  submitButton.addEventListener('click', runSubmit);
}

export default setupForm;
