import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserButtonComponent } from './delete-user-button.component';

describe('DeleteTaskButtonComponent', () => {
  let component: DeleteUserButtonComponent;
  let fixture: ComponentFixture<DeleteUserButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteUserButtonComponent]
    });
    fixture = TestBed.createComponent(DeleteUserButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
