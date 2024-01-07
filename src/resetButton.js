import ProjectStorage from './store';
import projects from './projectsList';
import { refreshProjectsMenu } from './projectSelector';
import refreshTodoListDisplay from './listDisplay';

const resetButton = document.querySelector('.reset-button');

resetButton.addEventListener('click', () => {
  new ProjectStorage().clear();
  projects.reset();
  refreshProjectsMenu();
  refreshTodoListDisplay();
});
