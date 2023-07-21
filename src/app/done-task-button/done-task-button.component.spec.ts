import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DoneTaskButtonComponent } from './done-task-button.component';
import { MatIcon } from '@angular/material/icon';

describe('DoneTaskButtonComponent', () => {
  let component: DoneTaskButtonComponent;
  let fixture: ComponentFixture<DoneTaskButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, HttpClientTestingModule, MatIcon],
      declarations: [DoneTaskButtonComponent]
    });
    fixture = TestBed.createComponent(DoneTaskButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
