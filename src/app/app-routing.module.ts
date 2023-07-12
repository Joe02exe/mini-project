import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragDropTaskComponent } from './drag-drop-task/drag-drop-task.component';
const routes: Routes = [  
  { path: 'dashboard', component: DragDropTaskComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
