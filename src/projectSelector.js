import projects from './projectsList';

const projectsMenu = document.querySelector('.projects-menu');

export const updateProjectsMenu = function updateProjectsMenu() {
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
    const newProjectName = document.createElement('input');
    const newProjectSubmitButton = document.createElement('button');
    newProjectSubmitButton.textContent = 'Add new project';
    newProjectForm.appendChild(newProjectName);
    newProjectForm.appendChild(newProjectSubmitButton);
    newProjectSubmitButton.addEventListener('click', () => {
      if (newProjectName.value !== '') {
        projects.createProject(newProjectName.value);
        newProjectForm.textContent = '';
        updateProjectsMenu();
      }
    });
  };

  const newProjectButton = document.querySelector('.new-project');
  newProjectButton.addEventListener('click', displayNewProjectInput);
  projectsMenu.addEventListener('change', (e) => {
    projects.changeCurrentProject(e.target.value);
  });
};