import ProjectStorage from './store';
import projects from './projectsList';
import { refreshProjectsMenu } from './projectSelector';
import refreshTodoListDisplay from './listDisplay';

const resetButton = document.querySelector('.reset-button');

resetButton.addEventListener('click', () => {
  if (confirm('This will reset all projects and todos')) {
    new ProjectStorage().clear();
    projects.reset();
    refreshProjectsMenu();
    refreshTodoListDisplay(projects.currentProject);
  }
});
