import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MatCardModule } from '@angular/material/card';
import { TaskComponent, DialogElementsExampleDialog } from './task/task.component'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropTaskComponent } from './drag-drop-task/drag-drop-task.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { DeleteTaskButtonComponent } from './delete-task-button/delete-task-button.component';
import { AddTaskButtonComponent } from './add-task-button/add-task-button.component';
import { DoneTaskButtonComponent } from './done-task-button/done-task-button.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadingInterceptor } from './services/loading.interceptor';
import { UserpanelComponent } from './userpanel/userpanel.component';
import { UserpanelDetailComponent } from './userpanel-detail/userpanel-detail.component';
import {MatTableModule} from '@angular/material/table'; 
import { DeleteUserButtonComponent, DeleteDialog } from './delete-user-button/delete-user-button.component';
import { CommonModule } from '@angular/common';
import { UserDialog } from './userpanel-detail/userpanel-detail.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';


@NgModule({
  declarations: [
    UserDialog,
    DeleteDialog,
    DeleteUserButtonComponent,
    AppComponent,
    UserComponent,
    DragDropTaskComponent,
    TaskComponent,
    DialogElementsExampleDialog,
    DeleteTaskButtonComponent,
    AddTaskButtonComponent,
    DoneTaskButtonComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    SpinnerComponent,
    UserpanelComponent,
    UserpanelDetailComponent,
    ForbiddenComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    DragDropModule,
    MatIconModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
    BrowserAnimationsModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
