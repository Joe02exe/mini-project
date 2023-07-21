import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropTaskComponent } from './drag-drop-task.component';

describe('DragDropTaskComponent', () => {
  let component: DragDropTaskComponent;
  let fixture: ComponentFixture<DragDropTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DragDropTaskComponent]
    });
    fixture = TestBed.createComponent(DragDropTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
