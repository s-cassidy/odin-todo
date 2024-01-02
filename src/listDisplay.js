import ProjectStorage from './store';
import projects from './projectsList';
import displayTodoList from './listDisplay';

const constructDOMListEntry = function constructDOMListEntry(todo, project) {
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

  textContainer.classList.add('todo-text-container');
  titleText.classList.add('todo-title');

  checkbox.setAttribute('type', 'checkbox');
  checkboxContainer.appendChild(checkbox);

  checkbox.addEventListener('change', (e) => {
    if (e.target.checked) {
      todo.setDone();
      listItem.classList.add('task-done');
    } else {
      todo.setNotDone();
      listItem.classList.remove('task-done');
    }
  });

  if (todo.isDone) {
    checkbox.checked = true;
    listItem.classList.add('task-done');
  }
  priorityText.textContent = todo.priority;
  priorityContainer.appendChild(priorityText);

  titleText.textContent = todo.title;
  descriptionText.textContent = todo.description;

  titleContainer.appendChild(titleText);
  descriptionContainer.appendChild(descriptionText);
  textContainer.appendChild(titleContainer);
  textContainer.appendChild(descriptionContainer);

  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    project.removeTodo(todo.id);
    displayTodoList(project);
    new ProjectStorage().save(projects.list);
  });
  buttonsContainer.appendChild(deleteButton);

  itemContainer.appendChild(checkboxContainer);
  itemContainer.appendChild(priorityContainer);
  itemContainer.appendChild(textContainer);
  itemContainer.appendChild(buttonsContainer);

  itemContainer.classList.add('todo-item-container');
  listItem.appendChild(itemContainer);

  return listItem;
};

const buildDOMList = function buildDOMList(project) {
  const listDOMElement = document.createElement('ul');
  listDOMElement.classList.add('todo-list');
  project.todoList.forEach((todo) => {
    const listItem = constructDOMListEntry(todo, project);
    listDOMElement.appendChild(listItem);
  });
  return listDOMElement;
};

const displayTodoList = function displayTodoList(project) {
  const listContainer = document.querySelector('.list-container');
  listContainer.textContent = '';
  const listContent = buildDOMList(project);
  listContainer.appendChild(listContent);
};

export default displayTodoList;
