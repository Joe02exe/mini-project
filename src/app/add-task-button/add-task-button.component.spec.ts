import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskButtonComponent } from './add-task-button.component';
import { MatDialog } from '@angular/material/dialog';

describe('AddTaskButtonComponent', () => {
  let component: AddTaskButtonComponent;
  let fixture: ComponentFixture<AddTaskButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTaskButtonComponent],
      providers: [MatDialog]

    });
    fixture = TestBed.createComponent(AddTaskButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
