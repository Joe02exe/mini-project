import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragDropTaskComponent } from './drag-drop-task/drag-drop-task.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [  
  { path: 'dashboard', canActivate: [AuthGuard], component: DragDropTaskComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
