import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DragDropTaskComponent } from './drag-drop-task.component';
import { AddTaskButtonComponent } from '../add-task-button/add-task-button.component';
import { DeleteTaskButtonComponent } from '../delete-task-button/delete-task-button.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';

describe('DragDropTaskComponent', () => {
  let component: DragDropTaskComponent;
  let fixture: ComponentFixture<DragDropTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule, MatDialogModule, DragDropModule], 
      declarations: [DragDropTaskComponent, AddTaskButtonComponent, DeleteTaskButtonComponent],
      providers: [MatDialog]
    });
    fixture = TestBed.createComponent(DragDropTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
