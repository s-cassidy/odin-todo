const constructDOMListEntry = function constructDOMListEntry(todo) {
  const listItem = document.createElement('li');
  const itemContainer = document.createElement('div');
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

  deleteButton.textContent = 'Delete';
  buttonsContainer.appendChild(deleteButton);

  itemContainer.appendChild(checkboxContainer);
  itemContainer.appendChild(priorityContainer);
  itemContainer.appendChild(textContainer);
  itemContainer.appendChild(buttonsContainer);
  listItem.appendChild(itemContainer);

  return listItem;
};

const buildDOMList = function buildDOMList(project) {
  const listDOMElement = document.createElement('ul');
  project.todoList.forEach((todo) => {
    const listItem = constructDOMListEntry(todo);
    listDOMElement.appendChild(listItem);
  });
  return listDOMElement;
};

const displayProjectList = function displayProjectList(project) {
  const listContainer = document.querySelector('.list-display');
  listContainer.textContent = '';
  const listContent = buildDOMList(project);
  listContainer.appendChild(listContent);
};

export default displayProjectList;
