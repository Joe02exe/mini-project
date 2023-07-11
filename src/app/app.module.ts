import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MatCardModule } from '@angular/material/card';
import { TaskComponent } from './task/task.component'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TaskComponent,
    TaskDetailComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    DragDropModule,
    MatIconModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
