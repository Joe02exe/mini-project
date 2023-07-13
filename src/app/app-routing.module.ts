import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragDropTaskComponent } from './drag-drop-task/drag-drop-task.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [  
  { path: 'dashboard', component: DragDropTaskComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
