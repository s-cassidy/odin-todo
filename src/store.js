export default class ProjectStorage {
  constructor() {
    this.KEY = 'projects';
  }

  retrieve() {
    return JSON.parse(localStorage.getItem(this.KEY));
  }

  save(projects) {
    localStorage.setItem(this.KEY, JSON.stringify(projects));
  }

  clear() {
    localStorage.removeItem(this.KEY);
  }
}
