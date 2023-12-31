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

  return {
    form,
    todoTitleInput,
    clearForm,
    runSubmit,
  };
}

export default setupForm;
