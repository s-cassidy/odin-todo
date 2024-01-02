import Project from './project';

class ProjectsList {
  constructor() {
    const defaultProject = new Project();
    this.list = [defaultProject];
    this.currentProject = defaultProject;
  }

  createProject = function createProject(name) {
    this.items = [...this.items, new Project(name)];
  };

  removeProject = function removeProject(idForRemoval) {
    this.items = this.items.filter(
      (project) => project.id !== idForRemoval
    );
  };

  changeCurrentProject = function changeCurrentProject(newCurrentId) {
    this.items.forEach((project) => {
      if (newCurrentId === project.id) {
        this.currentProject = project;
      }
    });
  };
}

const projects = new ProjectsList();
export default projects;
