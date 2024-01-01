const constructDOMListEntry = function constructDOMListEntry(todo) {
  const listItem = document.createElement('li');
  const checkboxContainer = document.createElement('span');
  const checkbox = document.createElement('input');
  const priorityContainer = document.createElement('span');
  const priorityText = document.createElement('h2');
  const textContainer = document.createElement('span');
  const titleContainer = document.createElement('div');
  const titleText = document.createElement('h2');
  const descriptionText = document.createElement('p');
  const descriptionContainer = document.createElement('div');
  const buttonsContainer = document.createElement('span');
  const deleteButton = document.createElement('button');

  checkbox.setAttribute('type', 'checkbox');
  checkboxContainer.appendChild(checkbox);

  priorityContainer.appendChild(priorityText);

  titleText.textContent = todo.title;
  descriptionText.textContent = todo.description;

  titleContainer.appendChild(titleText);
  descriptionContainer.appendChild(descriptionText);
  textContainer.appendChild(titleContainer);
  textContainer.appendChild(descriptionContainer);

  deleteButton.textContent('Delete');
  buttonsContainer.appendChild(deleteButton);

  listItem.appendChild(checkboxContainer);
  listItem.appendChild(priorityContainer);
  listItem.appendChild(textContainer);
  listItem.appendChild(buttonsContainer);

  return listItem;
};

const buildList = function buildList(project) {
  const listDOMElement = document.createElement('ul');
  project.todoList.forEach((todo) => {
    const listItem = constructDOMListEntry(todo);
    listDOMElement.appendChild(listItem);
  });
  return listDOMElement;
};
