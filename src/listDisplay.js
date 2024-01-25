import { format } from 'date-fns';
import deleteSVG from './assets/delete.svg';
import ProjectStorage from './store';
import projects from './projectsList';

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
  const dateContainer = document.createElement('div');
  const dateText = document.createElement('p');
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

  titleText.textContent = todo.title;
  titleContainer.appendChild(titleText);

  descriptionText.textContent = todo.description;
  descriptionContainer.appendChild(descriptionText);

  priorityText.textContent = todo.priority;
  priorityContainer.appendChild(priorityText);

  if (todo.dueDate) {
    dateText.textContent = format(todo.dueDate, 'dd/MM/yyyy');
  }
  dateContainer.appendChild(dateText);

  titleContainer.appendChild(titleText);
  descriptionContainer.appendChild(descriptionText);
  textContainer.appendChild(titleContainer);
  textContainer.appendChild(descriptionContainer);
  textContainer.appendChild(dateContainer);

  const deleteIcon = document.createElement('img');
  deleteIcon.src = deleteSVG;
  deleteButton.appendChild(deleteIcon);
  deleteButton.addEventListener('click', () => {
    project.removeTodo(todo.id);
    refreshTodoListDisplay(project);
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

// This function is hoisted as it is passed as a callback
// to the event listener on the the delete button
function refreshTodoListDisplay(project) {
  const listContainer = document.querySelector('.list-container');
  listContainer.textContent = '';
  const listContent = buildDOMList(project);
  listContainer.appendChild(listContent);
}

export default refreshTodoListDisplay;
