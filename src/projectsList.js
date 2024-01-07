import ProjectStorage from './store';
import Project from './project';

class ProjectsList {
  constructor() {
    const storedProjectsList = new ProjectStorage().retrieve();
    if (storedProjectsList) {
      this.list = storedProjectsList.map(
        (p) => new Project(p.name, p.todoList, p.id)
      );
      this.currentProject = this.list[0];
    } else {
      this.reset();
    }
  }

  removeProject = function removeProject(idForRemoval) {
    this.list = this.list.filter((project) => project.id !== idForRemoval);
    new ProjectStorage().save(this.list);
  };

  changeCurrentProject = function changeCurrentProject(newCurrentId) {
    this.list.forEach((project) => {
      if (newCurrentId === project.id) {
        this.currentProject = project;
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

  reset = function reset() {
    const defaultProject = new Project('Default');
    this.list = [defaultProject];
    this.currentProject = this.list[0];
  };
}

const projects = new ProjectsList();
export default projects;
