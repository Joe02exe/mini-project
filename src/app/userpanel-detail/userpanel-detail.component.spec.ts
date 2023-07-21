import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpanelDetailComponent } from './userpanel-detail.component';

describe('UserpanelDetailComponent', () => {
  let component: UserpanelDetailComponent;
  let fixture: ComponentFixture<UserpanelDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserpanelDetailComponent]
    });
    fixture = TestBed.createComponent(UserpanelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
