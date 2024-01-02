import displayTodoList from './listDisplay';
import ProjectStorage from './store';

class ProjectsList {
  constructor() {
    const defaultProject = new Project();
    this.list = [defaultProject];
    this.currentProject = defaultProject;
  }

  removeProject = function removeProject(idForRemoval) {
    this.list = this.list.filter((project) => project.id !== idForRemoval);
    new ProjectStorage().save(this.list);
  };

  changeCurrentProject = function changeCurrentProject(newCurrentId) {
    this.list.forEach((project) => {
      if (newCurrentId === project.id) {
        this.currentProject = project;
        displayTodoList(this.currentProject);
      }
    });
  };

  createProject = function createProject(name) {
    const newProject = new Project(name);
    this.list = [...this.list, newProject];
    this.changeCurrentProject(newProject.id);
    new ProjectStorage().save(this.list);
    return newProject;
  };
}

const projects = new ProjectsList();
export default projects;
