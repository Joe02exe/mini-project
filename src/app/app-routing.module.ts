import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragDropTaskComponent } from './drag-drop-task/drag-drop-task.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { UserpanelComponent } from './userpanel/userpanel.component';
import { AdminAuthGuard } from './admin-auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';


const routes: Routes = [  
  { path: 'dashboard', canActivate: [AuthGuard], component: DragDropTaskComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'users', component: UserpanelComponent, canActivate: [AdminAuthGuard]},
  { path: 'forbidden', component: ForbiddenComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
