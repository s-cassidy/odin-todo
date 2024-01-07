import './style.css';

import { initProjectsMenu, refreshProjectsMenu } from './projectSelector';
import setupForm from './form';
import projects from './projectsList';
import refreshTodoListDisplay from './listDisplay';
import './resetButton';

setupForm();
initProjectsMenu();
refreshProjectsMenu();
refreshTodoListDisplay(projects.currentProject);
