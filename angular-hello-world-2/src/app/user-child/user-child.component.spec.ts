import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChildComponent } from './user-child.component';

describe('UserChildComponent', () => {
  let component: UserChildComponent;
  let fixture: ComponentFixture<UserChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserChildComponent]
    });
    fixture = TestBed.createComponent(UserChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
