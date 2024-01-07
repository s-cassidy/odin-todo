import projects from './projectsList';
import refreshTodoListDisplay from './listDisplay';

const projectsMenu = document.querySelector('.projects-menu');

export const refreshProjectsMenu = function refreshProjectsMenu() {
  projectsMenu.textContent = '';
  projects.list.forEach((project) => {
    const menuItem = document.createElement('option');
    menuItem.setAttribute('value', project.id);
    menuItem.textContent = project.name;
    projectsMenu.appendChild(menuItem);
  });
};

export const initProjectsMenu = function initProjectsMenu() {
  const displayNewProjectInput = function displayNewProjectInput() {
    const newProjectForm = document.querySelector('.new-project-form');
    const newProjectNameLabel = document.createElement('label');
    const newProjectNameInput = document.createElement('input');
    const newProjectSubmitButton = document.createElement('button');

    newProjectSubmitButton.textContent = 'Add new project';
    newProjectNameLabel.textContent = 'Project name:';
    newProjectNameLabel.setAttribute('for', 'new-project-name');
    newProjectNameInput.setAttribute('id', 'new-project-name');
    newProjectForm.appendChild(newProjectNameLabel);
    newProjectForm.appendChild(newProjectNameInput);
    newProjectForm.appendChild(newProjectSubmitButton);

    newProjectSubmitButton.addEventListener('click', () => {
      if (newProjectNameInput.value !== '') {
        const newProject = projects.createProject(
          newProjectNameInput.value
        );
        newProjectForm.textContent = '';
        refreshProjectsMenu();
        projectsMenu.value = newProject.id;
      }
    });
  };

  const newProjectButton = document.querySelector('.new-project');
  newProjectButton.addEventListener('click', displayNewProjectInput);
  projectsMenu.addEventListener('change', (e) => {
    projects.changeCurrentProject(e.target.value);
    refreshTodoListDisplay(projects.currentProject);
  });
};
