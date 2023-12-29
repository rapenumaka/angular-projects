import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserParentComponent } from './user-parent.component';

describe('UserParentComponent', () => {
  let component: UserParentComponent;
  let fixture: ComponentFixture<UserParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserParentComponent]
    });
    fixture = TestBed.createComponent(UserParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
