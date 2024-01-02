import Project from './project';
import displayTodoList from './listDisplay';

class ProjectsList {
  constructor() {
    const defaultProject = new Project();
    this.list = [defaultProject];
    this.currentProject = defaultProject;
  }

  createProject = function createProject(name) {
    this.list = [...this.list, new Project(name)];
  };

  removeProject = function removeProject(idForRemoval) {
    this.list = this.list.filter((project) => project.id !== idForRemoval);
  };

  changeCurrentProject = function changeCurrentProject(newCurrentId) {
    this.list.forEach((project) => {
      if (newCurrentId === project.id) {
        this.currentProject = project;
        displayTodoList(this.currentProject);
      }
    });
  };
}

const projects = new ProjectsList();
export default projects;
