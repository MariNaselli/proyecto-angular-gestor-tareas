import { Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/task-list', pathMatch: 'full' }, // Redirige al listado por defecto
    { path: 'task-list', component: TaskListComponent },       // Ruta para el listado de tareas
    { path: 'new-task', component: TaskFormComponent }     // Ruta para crear una nueva tarea
];
