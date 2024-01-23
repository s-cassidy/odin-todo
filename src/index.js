import './style.css';

import { initProjectsMenu, refreshProjectsMenu } from './projectSelector';
import refreshTodoListDisplay from './listDisplay';
import projects from './projectsList';
import './resetButton';
import setupForm from './form';

setupForm();
initProjectsMenu();
refreshProjectsMenu();
refreshTodoListDisplay(projects.currentProject);
