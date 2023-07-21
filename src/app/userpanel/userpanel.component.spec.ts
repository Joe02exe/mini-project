import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserpanelComponent } from './userpanel.component';
import { MatCardModule } from '@angular/material/card';

describe('UserpanelComponent', () => {
  let component: UserpanelComponent;
  let fixture: ComponentFixture<UserpanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule, MatCardModule],
      declarations: [UserpanelComponent]
    });
    fixture = TestBed.createComponent(UserpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
