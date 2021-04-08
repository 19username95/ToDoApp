import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./navigation-page/navigation-page.module').then(m => m.NavigationPageModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./tasks-view-page/tasks-view-page.module').then(m => m.TasksViewPageModule)
  },
  {
    path: 'add-task',
    loadChildren: () => import('./add-task-page/add-task-page.module').then(m => m.AddTaskPageModule)
  },
  {
    path: 'task-id',
    loadChildren: () => import('./edit-task-page/edit-task-page.module').then(m => m.EditTaskPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./not-found-page/not-found-page.module').then(m => m.NotFoundPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
