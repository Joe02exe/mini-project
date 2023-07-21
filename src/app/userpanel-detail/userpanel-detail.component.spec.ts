import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpanelDetailComponent } from './userpanel-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatDialog } from '@angular/material/dialog';


describe('UserpanelDetailComponent', () => {
  let component: UserpanelDetailComponent;
  let fixture: ComponentFixture<UserpanelDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, HttpClientTestingModule],
      declarations: [UserpanelDetailComponent],
      providers: [MatDialog]

    });
    fixture = TestBed.createComponent(UserpanelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
