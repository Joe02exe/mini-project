import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneTaskButtonComponent } from './done-task-button.component';

describe('DoneTaskButtonComponent', () => {
  let component: DoneTaskButtonComponent;
  let fixture: ComponentFixture<DoneTaskButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
